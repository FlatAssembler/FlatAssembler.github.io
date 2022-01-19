/*
 * This C++ program outputs SQLite3-compatible database containing names of
 * numbers 1-10 in various languages. It also does some "SELECT" and "UPDATE"
 * queries illustrating how such a database might be used, that is, what kind
 * of information it can provide.
 */

#include <fstream>
#include <sstream>
#include <string>

using namespace std;

int main() {
  string result = R"(
    CREATE TABLE languages (language_name varchar(20),
                            parent_language varchar(20),
                            language_family varchar(20) default 'Other',
                            PRIMARY KEY (language_name),
                            CONSTRAINT FK_language_protolanguage FOREIGN KEY
                                       (language_name) REFERENCES languages(language_name),
                            CONSTRAINT valid_language_family_name CHECK (language_family in
										                    ('Niger–Congo', 'Austronesian', 'Sino-Tibetan', 'Indo-European',
                                         'Australian', 'Afro-Asiatic', 'Nilo-Saharan', 'Oto-Manguean',
                                         'Austroasiatic', 'Tai–Kadai', 'Dravidian', 'Tupian', 'Other'))
                           );
    CREATE TABLE names_of_numbers (
      language_name varchar(20),
      word varchar(20),
      value integer,
      comment varchar(1000),
      attested integer check (attested in (0,1)),
      CONSTRAINT FK_number_language FOREIGN KEY (language_name) REFERENCES languages(language_name),
      CONSTRAINT value_number_between_1_and_10 CHECK (value between 1 and 10),
      PRIMARY KEY (language_name, value)
    );
    CREATE TABLE variables (variable_name varchar(30) primary key, value integer);
  )";
  string table = R"(
Proto-Afro-Asiatic Afro-Asiatic NULL NULL *tsan *xaimz *fazu NULL NULL NULL NULL NULL NULL
Proto-Berber Afro-Asiatic Proto-Afro-Asiatic		yn 	sn 	krad 	okkoz 	fuss 	fussdyn 	fussdsn 	fussdkrad 	addawmeraw 	meraw
Ghadames Afro-Asiatic Proto-Berber		yun 	sen 	kared 	aqquz 	semmes 	suz 	sa 	tam 	tesu 	maraw
Tenerife Afro-Asiatic Proto-Berber		ben 	lini 	amiat 	arba 	cansa 	sumus 	sat 	set 	acot 	marago
Kabyle 	Afro-Asiatic Proto-Berber	yiwen	sin 	tlata 	rebea 	xemsa 	setta 	sebea 	tmanya 	tesea 	eecra
Riffian	Afro-Asiatic Proto-Berber	yijjen 	 sin krad 	kuz 	xemsa  	setta  	seba 	tmanya  	tza 	mraw
Shilha 	Afro-Asiatic Proto-Berber	yan 	sin 	krad 	kkuz 	semmus 	sdis 	sa 	ttam 	ttza 	mraw
Zenaga 	Afro-Asiatic Proto-Berber	iun 	shinan 	karat 	akoz 	shammush 	shodush 	ishsha 	ittem 	tuza 	mereg
Tamasheq Afro-Asiatic Proto-Berber		iyan 	esshin 	kerad 	ekkoz 	semmos 	sedis 	essa 	ettam 	teza 	meraw
Hausa Afro-Asiatic Proto-Afro-Asiatic	daya 	biyu 	uku 	hudu 	biyar 	shida 	bakwai 	takwas 	tara goma
Oromo Afro-Asiatic Proto-Afro-Asiatic 	tokko 	lama 	sadii 	afur 	shan 	jaa 	torba 	saddet 	sagal kudhan
Somali Afro-Asiatic Proto-Afro-Asiatic 	kow 	laba 	saddex 	afar 	shan 	lix 	toddoba 	siddeed 	sagaal	toban
Old_Egyptian Afro-Asiatic Proto-Afro-Asiatic *wuhhuw 	*sinuwwaj 	*hamtaw 	*jaftaw 	*tijaw 	*sarsaw 	*safhaw 	*hamanaw 	*pisicaw	*mucaw
Middle_Egyptian Afro-Asiatic Old_Egyptian wuhhuw 	sinuwwaj 	hamtaw 	jaftaw 	tijaw 	sarsaw 	safhaw 	hamanaw 	pisitaw	mucaw
Late_Egyptian Afro-Asiatic Middle_Egyptian 	  	wohhu 	sunou 	hamt 	huftaw 	tiyu 	hussaw 	safh 	humon 	pusit 	meet
Coptic Afro-Asiatic Late_Egyptian ouai snau xomt ftou tiou sou xaxf xmen psit met
Dizi 	Afro-Asiatic	Proto-Afro-Asiatic	koy 	tagn 	kadu 	kubmjii 	uxcu 	yaku 	tusu 	zyed 	sagil 	tamu
Nayi 	Afro-Asiatic	Proto-Afro-Asiatic	isin 	tagen 	kaddu 	kubm 	uchum 	yakko 	tessen 	zyad 	sagn 	tamu
Sheko 	Afro-Asiatic	Proto-Afro-Asiatic	koy 	tagen 	kaddu 	kubm 	uchu 	yaku 	tubsu 	zyed 	sagen 	tam
Anfillo Afro-Asiatic	Proto-Afro-Asiatic		ikko 	gutto 	keggo 	auddo 	amitto 	shirto 	shabatto 	shimitto 	yiringo 	ashiro
Shinasha Afro-Asiatic	Proto-Afro-Asiatic		ikka 	gitta 	keza 	awdda 	usa 	sherita 	shawata 	shimita 	jeriya 	tasa
Khaficho Afro-Asiatic	Proto-Afro-Asiatic		ikka 	gutta 	kaja 	guda 	uja 	sirita 	sabata 	shiminta 	yitiya 	ajera
Mocha 	Afro-Asiatic	Proto-Afro-Asiatic	hikko 	gutto 	kaggo 	awuddo 	uchcho 	shiritto 	shabatto 	shimitto 	yitiyo 	ashiro
Bench 	Afro-Asiatic	Proto-Afro-Asiatic	mat 	nam 	kaz 	od 	uts 	sapm 	napm 	niartn 	irstun 	tam
Chara 	Afro-Asiatic	Proto-Afro-Asiatic	issa 	nanta 	keza 	obda 	uchcha 	safun 	lapun 	nandirse 	biza 	tantsa
Ometo 	Afro-Asiatic	Proto-Afro-Asiatic	ista 	naaha 	hezza 	oydda 	iccaca 	usuppuna 	laappuna 	hoospuna 	uddupunaa 	tamma
Dime Afro-Asiatic Proto-Afro-Asiatic 		wokkil 	kasten 	mikkim 	uddu 	shinne 	lah 	tossum 	kashnash 	bokolash 	tamme
Proto-Semitic Afro-Asiatic Proto-Afro-Asiatic		*ahad 	*tin 	*salat 	*arba 	*hamx 	*xidt 	*xab 	*tamaniy 	*tix 	*asar
Maltese Afro-Asiatic Proto-Semitic 	wiehed 	tnejn 	tlieta 	erbgha 	hamsa 	sitta 	sebgha 	tmienja 	disgha 	ghaxra
Arabic Afro-Asiatic Proto-Semitic wahid itnan talata harbaha hamsa sitta sabha tamaniya tisha haxara
Aramaic Afro-Asiatic Proto-Semitic had turen tulata harbha hamxa xitta xabha tumanya tixha hasra
Syriac Afro-Asiatic Aramaic had turen tlata harbha hamxa xuta xabha tumanya texha hesra
Phoenician Afro-Asiatic Proto-Semitic hihad senem salus hareb homis sis sebah semuni tisah hisir
Hebrew Afro-Asiatic Proto-Semitic hahat xetayim xalox harbah hames xex xeba xemoneh texa heser
Proto-Austronesian Austronesian NULL *isa *dusa *telu *sepat *lima *enum *pitu *walu *xiwa *puluq
Amis Austronesian Proto-Austronesian		cecay 	tosa 	tolo 	spet 	lima 	enem 	pito 	falo 	siwa 	motep
Atayal 	Austronesian Proto-Austronesian	qutux 	sazing 	cyugal 	payat 	magal 	mtzyu 	mpitu 	mspat 	mqeru 	mopuw
Paiwan 	Austronesian Proto-Austronesian	ita 	drusa 	tjelu 	sepatj 	lima 	enem 	pitju 	alu 	siva 	tapuluq
Bunun 	Austronesian Proto-Austronesian	tasha 	dusa 	tau 	paat 	hima 	nuum 	pitu 	vau 	siva 	mashan
Puyuma 	Austronesian Proto-Austronesian	isa 	zuwa 	telu 	pat 	lima 	unem 	pitu 	walu 	iwa 	puluh
Rukai 	Austronesian Proto-Austronesian	itha 	drusa 	tulru 	supate 	lrima 	eneme 	pitu 	valru 	bangate 	pulruku
Thao 	Austronesian Proto-Austronesian	taha 	tusha 	turu 	shpat 	tarima 	katuru 	pitu 	kashpat 	tanathu 	makthin
Kavalan Austronesian Proto-Austronesian		usiq 	uzusa 	utulu 	uspat 	ulima 	unem 	upitu 	uwalu 	usiwa 	rabtin
Truku 	Austronesian Proto-Austronesian	kingal 	dha 	tru 	spat 	rima 	mataru 	empitu 	maspat 	mngari 	maxal
Seediq 	Austronesian Proto-Austronesian	kingal 	daha 	teru 	sepac 	rima 	mmteru 	mpitu 	mmsepac 	mngari 	maxal
Siraya 	Austronesian Proto-Austronesian	saat 	ruha 	turu 	xpat 	rima 	nom 	pitu 	kuixpa 	matuda 	kitian
Taivoan Austronesian Proto-Austronesian	cahah 	ruha 	toho 	paha 	hima 	lom 	kito 	kipa 	matuha 	kaipien
Indonesian Austronesian Proto-Austronesian satu dua tiga empat lima enam tujuh delepan sembilan sepuluh
Tagalog Austronesian Proto-Austronesian isa dalawa tatlo apat lima anim pito walo siyam sampu
Hawaiian Austronesian Proto-Austronesian hekahi helua hekolu heha helima heono hehiku hewalu heiwa humi
Maori Austronesian Proto-Austronesian tahi rua toru wha rima ono whitu waru iwa tekau
Tahitian Austronesian Proto-Austronesian tahi piti toru maha pae ono hitu vahu iva hohehahuru
Proto-Indo-European Indo-European NULL *hoynos *dwoh *treyes *qetwores *penqe *swecs *septm *hectow *hnewn *decm
Albanian Indo-European Proto-Indo-European nji dy tre kater pese giaxte xtate tete nande dhete
Hittite Indo-European Proto-Indo-European as dan tereies mayewes NULL NULL xipta NULL NULL NULL
Lycian Indo-European Proto-Indo-European sinta tuwa trei teteri NULL NULL NULL aitata nuntata NULL
Luwian Indo-European Proto-Indo-European in an tarris mawa NULL NULL xaptami NULL NULL NULL
Armenian Indo-European Proto-Indo-European mi erkow erek txork hing vec eotun owt inun tasun
Gaulish Indo-European Proto-Indo-European oino do tri petor pempe suekos sekstam okstu nau decam
Gothic Indo-European Proto-Indo-European ains twai threis fidwor fimf saihs sibun ahtau niun taihun
English Indo-European Proto-Indo-European uan txu thri for faiv siks sevun eit nain ten
Dutch Indo-European Proto-Indo-European een tvee dri vir veif zes zevun aht neyen tin
German Indo-European Proto-Indo-European ains tsvai drai fiar funf zeks zibun aht noin tseen
Icelandic Indo-European Proto-Indo-European ein tveir thrir fyorir fimum seks syu atta niu tiu
Danish Indo-European Proto-Indo-European en to tre fire fem seks siv otte ni ti
Swedish Indo-European Proto-Indo-European en tva tre fira fem seks siu atta nio tio
Oscan Indo-European Proto-Indo-European winus dus tris petora pompe *sehs *seften *uhto *nuwen *deken
Umbrian Indo-European Proto-Indo-European uns tuf trif petur pumpe sehs  NULL NULL *nuwim *desem
Faliscan Indo-European Proto-Indo-European NULL du tris NULL cicue zeks zepten oktu neven NULL
Latin Indo-European Proto-Indo-European unus duo tres quattuor quinque seks septem okto novem dekem
Sardinian 	Indo-European Latin 	unu 	duos 	tres 	battoro 	chimbe 	ses 	sette 	otto 	noe 	deghe
Romanian Indo-European Latin	unu 	doi 	trei 	patru 	cinci 	sase 	sapte 	opt 	noua 	zece
Italian Indo-European Latin uno due tre kuattro txinkwe sei sette otto nove dietxi
Lombard	Indo-European Latin	vun 	duu 	trii 	quatter 	cinqu 	ses 	sett 	vott 	noeuv 	des
Ladin 	Indo-European Latin	un 	doi 	trei 	cater 	cinch 	sies 	set 	ot 	nuef 	diesc
French Indo-European Latin in du turua katur sek sis set wit nuf dis
Occitan Indo-European Latin un dos tres catre cinc seis set och nau detz
Portuguese Indo-European Latin umu dois tres kuatru siku ses seti oitu novi dez
Spanish Indo-European Latin uno dos tres kuatro sinko seis siete otxo nueve dies
Greek Indo-European Proto-Indo-European heis duo treis tettares pente heks hepta okto ennea deka
Lithuanian  Indo-European Proto-Indo-European	vienas 	du 	trys 	keturi 	penki 	xexi 	septyni 	axtuoni 	devini 	deximt
Latvian 	Indo-European Proto-Indo-European 	viens 	divi 	triis 	txetri 	pieci 	sexi 	septini 	astoni 	devini 	desmit
Proto-Slavic Indo-European Proto-Indo-European *edinu *duva *triye *txetire *penti *xesti *sedmi *osmi *deventi *desenti
Russian Indo-European Proto-Slavic adyin dvie tri txitirie piat xesit siem vosim dievit desiat
Czech Indo-European Proto-Slavic yeden dva tri txtiri pyet xest sedm osm deviet deset
Polish Indo-European Proto-Slavic yeden dva tzi tsteri pietx sextx siedem osiem dzeviyetx dzexetx
Slovak Indo-European Proto-Slavic yeden dva tri xtiri pec xesc seyem osem yevec yesac
Serbo-Croatian Indo-European Proto-Slavic yedan dva tri txetiri pet xest sedam osam devet deset
Slovene Indo-European Proto-Slavic ena dve tri xtiri pet xest sedem osem devet deset
Sanskrit Indo-European Proto-Indo-European aika dva trayas catvaras panca sas sapta asta nava dasa
Pali Indo-European Sanskrit eka dve tayo cattaro panyca txa satta attha nava dasa
Hindi Indo-European Sanskrit ek do tin txar patx txe sat ath no dus
Nepali Indo-European Pali ek dui tin car pamc chha sat ath nau das
Bengali Indo-European Sanskrit ek dui tin txar patx txoe xat at noe dox
Punjabi Indo-European Sanskrit ikuk do tinun txar panj khuhe satut atuth naum das
Sindhi Indo-European Sanskrit hik bah teh txar panj txah sath ath nav deh
Avestan Indo-European Proto-Indo-European aeva dva thri txathvar pantxa hxvax hapta axta nava dasa
Ossetian Indo-European Proto-Indo-European iu diuae aetae tsuppar fondz aexsaez avd ast farast daes
Tocharian Indo-European Proto-Indo-European sas wu tre stuar pany sak spat okat nu sak
Proto-Sino-Tibetan Sino-Tibetan NULL *ktyig *knyis *ktium *pli *punga *triuk *snis *triat *tkua *untsub
Mandarin Sino-Tibetan Proto-Sino-Tibetan yi er saan si wu liu txi ba txiu xi
Yantai Sino-Tibetan Proto-Sino-Tibetan i lia san si u liu txi pa ciu txi
Rugao Sino-Tibetan Proto-Sino-Tibetan iuh lia se su vu loh txiuh peh txiu suh
Jin Sino-Tibetan Proto-Sino-Tibetan iuh lio sae su vu liuh txiuh pah txiuh suh
Shanghainese Sino-Tibetan Proto-Sino-Tibetan ih nyi se su ung loh txih pah txieu zeh
Cantonese Sino-Tibetan Proto-Sino-Tibetan yat leuhung saam sei ungh luhk txat baat gau sahp
Min Sino-Tibetan Proto-Sino-Tibetan tsit ji sam si goo lak txit pueh kau tsap
Xiang Sino-Tibetan Proto-Sino-Tibetan i lie sa su u luw txi po txiuw si
Gan Sino-Tibetan Proto-Sino-Tibetan it liong san su eng liuh txit pat txiu xit
Hakka Sino-Tibetan Proto-Sino-Tibetan it engi sam si eng liuh txit pat kiu sip
Huizhou Sino-Tibetan Proto-Sino-Tibetan ieh eh so se ui luh txieh poh txih xieh
Pinghua Sino-Tibetan Proto-Sino-Tibetan zi lin xu sa ung lio txu pia txiou su
Dali Sino-Tibetan Proto-Sino-Tibetan ji kou sa xi ungu fu txihi pia txu tse
Burmese Sino-Tibetan Proto-Sino-Tibetan tih nih thouw le unga txauh khuwnih xih ko xeba
Yi Sino-Tibetan Proto-Sino-Tibetan ti ni so zu unga fu su hi gu txi
Qiang Sino-Tibetan Proto-Sino-Tibetan a nyi txi dughuz gua xitsu sing txe xigue xadi
Tibetan Sino-Tibetan Proto-Sino-Tibetan gucig gnis ksum buxi linga drug ubdun burgiad udgu bucu
Ladakhi Sino-Tibetan Proto-Sino-Tibetan cig nis sum izxi unga truk dun giat urgu ubcu
Bhutanese Sino-Tibetan Proto-Sino-Tibetan ci nyi sum xi unga druk dun ja gu txutham
Khmer Austroasiatic NULL muuj pil buj buun pram prammuj prampi prambuj prambuen dap
Vietnamese Austroasiatic NULL mot hai ba bon nam sau bay tam txin muoi
Proto-Dravidian Dravidian NULL *ontu *irantu *muntu *nalku *caymtu *catu *eltu *enttu *tonpahtu *pahtu
Kannada Dravidian Proto-Dravidian ondu eradu muru nalku aidu aru elu entu ombhattu hattu
Tamil Dravidian Proto-Dravidian ondru irandu munru nanagu aindhu aru elu ettu onbadhu pathithu
Swahili Niger–Congo NULL moja mubili tatu nune tano sita saba nane tisa kumi
Zulu Niger–Congo NULL kunye kubili kuthathu kune kuhlanu isithupha isikhombisa isixiyagalobili isixiyagalolunye ixumi
Thai Tai–Kadai NULL nueng song sam si ha hok txet paet kaw sip
Proto-Turkic Other NULL bir eki utx tort bex alti yeti sekiz tokuz on
Uygrhur Other Proto-Turkic bir ikki ukh tut bex alte yette sekkiz toquuz on
Turkish Other Proto-Turkic bir iki itx durt bex alti yedi sekiz dokuz on
Proto-Uralic Other NULL *ukte *kakte *kolm *nelia *wite *kutte *xajtxem NULL NULL *luka
Finnish Other Proto-Uralic iksi 	kaksi 	kolme 	nelja 	viisi 	kuusi 	seitseman 	kahdeksan 	ihdeksan 	kimmenen
Estonian Other Proto-Uralic uks 	kaks 	kolm 	neli 	viis 	kuus 	seitse 	kaheksa 	uheksa 	kumme
Sami Other Proto-Uralic ohta kiehti kulma neli vitta kutta txitxam kavci ouce love
Hungarian Other Proto-Uralic ej kettu harom nej ut hat het niolts kilents tiiz
Mansi Other Proto-Uralic akva kitig hurum nila at hot sat niolov ontolov lov
Georgian Other NULL erti ori sami othi huti ekusi xvidi rua tsixra ati
Chechen Other NULL tsixay xiy quoy diy pixiy yalx vorh barh isus itut
Proto-Japonic Other NULL *pitu *puta *mit *yu *itu *mut *nana *ya *kukunu *tuwu
Korean Other NULL hana dul set net tasot yosot ilgop yodol ahop yol
Mongolian Other NULL niken qoyar gurban durben tabun jirquoghan dologhan nayiman yisin arban
Proto-Mayan Other NULL *juun 	*kaab 	*oohx 	*kaang 	*hoh 	*wahuq 	*huq 	*waqshaq 	*beleng 	*laxung
Mayan Other Proto-Mayan hun 	kaa 	oox 	kan 	hoo 	waak 	uuk 	waxak 	bolon 	lahun
Yupik Other NULL		atauciq 	malruk 	pingayun 	cetaman 	talyiman 	arvinglegen 	malrunglegen 	pingayunglegen 	qulngunritaraan 	qula
Inuit Other NULL atausique marruwu pingasut sitamat tallimat arviniquutut marruwunginiarvinilik pingasuniarvinilik quilingiluaquutut quilit
Navajo Other NULL tialiai nahaki tahah dyih axdlah hastaha tsostsid tsebihi nahastei neheznaha
Quechua Other NULL huque iskay kinda tawa pisqua suquuta quantxis pusaqua isquon txunka
Hopi Other NULL suwukyah luyum payom naluyum tsivot navay tsangeh nanalt peut pakut
Nahuatl Other NULL ke ome eyi nahui makuilli txikuace txikome txikueyi txiknahui mahtlaktli
Basque Other NULL bat bi hiru lau bost sei zazpi zortzi bederatzi hamar
Etruscan Other NULL thu zal ki huth mah sa semf kezp nurf sar
Sumerian Other NULL dex min pex lim i yax imin yus ilim hu
  )";
  istringstream tableStream(table);
  while (tableStream) {
    string languageName, languageFamilyName, parentLanguageName;
    tableStream >> languageName >> languageFamilyName >> parentLanguageName;
    if (!tableStream)
      break;
    result += R"(
      INSERT INTO languages values (')" +
              languageName + "'," +
              (parentLanguageName != "NULL" ? "'" + parentLanguageName + "'"
                                            : "NULL") +
              ",'" + languageFamilyName + "');\n";
    for (int i = 1; i <= 10; i++) {
      string numberName;
      tableStream >> numberName;
      if (numberName == "NULL")
        continue;
      result += "INSERT INTO names_of_numbers(language_name, word, value, "
                "attested) VALUES ('" +
                languageName + "','" +
                (numberName[0] == '*' ? numberName.substr(1) : numberName) +
                "'," + to_string(i) + "," + (numberName[0] == '*' ? "0" : "1") +
                ");\n";
    }
  }
  result += R"(
SELECT language1.language_name AS
          "Languages with different language family from their parent language, check for these errors!"
          FROM (languages AS language1),languages WHERE
            language1.language_name=languages.parent_language and
            language1.language_family<>languages.language_family;

UPDATE names_of_numbers SET comment='It is amazing to me that the Proto-Sino-Tibetan word for the number 8 was "triat", when, in nearly all modern Sino-Tibetan languages, the word for number eight starts with either "p" or "b".' WHERE language_name='Proto-Sino-Tibetan' and value=8;
UPDATE names_of_numbers SET comment='The Etruscan word for the number 8, "kezp", is usually considered to be compound from "ki" (three) and "zep" (hand), to mean "three plus the number of fingers on one hand".' WHERE language_name='Etruscan' and value=8;
UPDATE names_of_numbers SET comment='Some amazing sound changes visible here...' WHERE language_name='Armenian' and value=2;
UPDATE names_of_numbers, languages SET comment='Innovation in the Anatolian branch...' WHERE value=4 and word like 'm%' and languages.language_name=names_of_numbers.language_name and languages.language_family='Indo-European';
UPDATE names_of_numbers, languages SET comment='The "d" at the beginning is either contamination from the word for the number 10, or sound change from "hn".' WHERE value=9 and languages.language_name=names_of_numbers.language_name and languages.language_family='Indo-European' and word like 'd%';

SELECT * FROM names_of_numbers WHERE comment IS NOT NULL;

INSERT INTO variables VALUES ('Number of languages',(SELECT COUNT(*) FROM Languages));
INSERT INTO variables VALUES ('Number of Indo-European languages',(SELECT COUNT(*) FROM Languages WHERE Languages.language_family='Indo-European'));
INSERT INTO variables VALUES ('Number of Semitic languages',(SELECT COUNT(*) FROM Languages WHERE Languages.parent_language='Proto-Semitic'));

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/variables.value
	AS "Percentage of languages in which the words for 2 and 10 start with the same letter."
	FROM (names_of_numbers as numbers1),names_of_numbers,variables
	WHERE variables.variable_name='Number of languages' and numbers1.language_name=names_of_numbers.language_name and substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and numbers1.value=2 and names_of_numbers.value=10;

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/variables.value
	AS "Percentage of Indo-European languages in which the words for 2 and 10 start with the same letter."
	FROM (names_of_numbers as numbers1),names_of_numbers,languages,variables
	WHERE variables.variable_name='Number of Indo-European languages' and numbers1.language_name=names_of_numbers.language_name
		 and names_of_numbers.language_name=languages.language_name and languages.language_family='Indo-European' and
		 substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and numbers1.value=2 and names_of_numbers.value=10;

SELECT 100. * COUNT (DISTINCT names_of_numbers.language_name) / (SELECT value FROM variables WHERE variable_name = 'Number of languages')
	AS "Percentage of languages in which the words for three and eight start with the same letter (as in Etruscan, where 'eight' means 'three plus hand')."
	FROM (names_of_numbers as numbers1), names_of_numbers
	WHERE numbers1.language_name=names_of_numbers.language_name and
		substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and
		numbers1.value=3 and names_of_numbers.value=8;

SELECT 100. * COUNT (DISTINCT names_of_numbers.language_name) / (SELECT value FROM variables WHERE variable_name = 'Number of languages')
	AS "Percentage of languages in which the words for two and eight start with the same letter (the opposite of Etruscan, so that 'eight' is 'two to ten')."
	FROM (names_of_numbers as numbers1), names_of_numbers
	WHERE numbers1.language_name=names_of_numbers.language_name and
		substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and
		numbers1.value=2 and names_of_numbers.value=8;

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/variables.value
	AS "Percentage of languages in which the words for 6 and 7 start with the same letter."
	FROM (names_of_numbers as numbers1),names_of_numbers,variables
	WHERE variables.variable_name='Number of languages' and numbers1.language_name=names_of_numbers.language_name and substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and numbers1.value=6 and names_of_numbers.value=7;

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/variables.value
	AS "Percentage of Indo-European languages in which the words for 6 and 7 start with the same letter."
	FROM (names_of_numbers as numbers1),names_of_numbers,languages,variables
	WHERE variables.variable_name='Number of Indo-European languages' and numbers1.language_name=names_of_numbers.language_name
		 and names_of_numbers.language_name=languages.language_name and languages.language_family='Indo-European' and
		 substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and numbers1.value=6 and names_of_numbers.value=7;

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/variables.value
	AS "Percentage of Semitic languages in which the words for 6 and 7 start with the same letter."
	FROM (names_of_numbers as numbers1),names_of_numbers,languages,variables
	WHERE variables.variable_name='Number of Semitic languages' and numbers1.language_name=names_of_numbers.language_name
		 and names_of_numbers.language_name=languages.language_name and languages.parent_language='Proto-Semitic' and
		 substr(numbers1.word,1,1)=substr(names_of_numbers.word,1,1) and numbers1.value=6 and names_of_numbers.value=7;

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/(SELECT value FROM variables WHERE variable_name='Number of languages')
	AS "Percentage of languages in which the word for the number 8 starts with either 'p' or 'b'."
	FROM languages,names_of_numbers
	WHERE names_of_numbers.value=8 and (names_of_numbers.word like 'p%' or names_of_numbers.word like 'b%') and names_of_numbers.language_name=languages.language_name;

SELECT 100.*COUNT(DISTINCT names_of_numbers.language_name)/(SELECT COUNT(*) FROM languages WHERE language_family='Sino-Tibetan')
	AS "Percentage of Sino-Tibetan languages in which the word for the number 8 starts with either 'p' or 'b'."
	FROM languages,names_of_numbers
	WHERE names_of_numbers.value=8 and (names_of_numbers.word like 'p%' or names_of_numbers.word like 'b%') and names_of_numbers.language_name=languages.language_name and languages.language_family='Sino-Tibetan';

SELECT 100.*COUNT(*)/variables.value
	AS "Percentage of languages in which the word for 6 starts with 's' or 'sh' (here transcribed as 'x')."
	FROM names_of_numbers,variables
	WHERE variables.variable_name='Number of languages' and names_of_numbers.value=6 and (names_of_numbers.word like 's%' or names_of_numbers.word like 'x%');

SELECT 100.*COUNT(*)/variables.value
	AS "Percentage of languages in which the word for 7 starts with 's' or 'sh'."
	FROM names_of_numbers,variables
	WHERE variables.variable_name='Number of languages' and names_of_numbers.value=7 and (names_of_numbers.word like 's%' or names_of_numbers.word like 'x%');

SELECT language_family as "Language family", number1.language_name as "Language in which exactly one of the words for 6 and 7 seems to be borrowed from the mystery language", number1.word as "Name for number 6", names_of_numbers.word as "Name for number 7"
	FROM (names_of_numbers AS number1),names_of_numbers,languages
	WHERE number1.language_name=names_of_numbers.language_name and names_of_numbers.language_name=languages.language_name
			and number1.value=6 and names_of_numbers.value=7
			and (names_of_numbers.word like 's%' or number1.word like 's%' or names_of_numbers.word like 'x%' or number1.word like 'x%') and substr(names_of_numbers.word,1,1)<>substr(number1.word,1,1) and not(number1.word like 's%' and names_of_numbers.word like 'x%') and not(number1.word like 'x%' and names_of_numbers.word like 's%');
)";
  ofstream output("languages.sql");
  output << result;
  output.close();
}
