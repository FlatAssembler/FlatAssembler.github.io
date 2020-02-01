format PE console
;;"PE" je format kompatibilan s 32-bitnim Windowsima.
;;Ne pokusavajte prebaciti u "PE64" jer cete kodove s pokazivacima morati ponovno pisati.
entry start

include 'win32a.inc'

section '.text' code executable
start:
;;Ovo je primjer kako se mogu unositi varijable koje su decimalni brojevi s tipkovnice.
;;Ja bih predlozio ne muciti se s time, jer je FlatAssembler toliko brz,
;;da je vjerojatno brze svaki puta mijenjati vrijednosti varijabli u kodu i ponovno compilirati.
mov dword [esp],_izlaz1
call [printf]
mov dword [esp+4],result
mov dword [esp],_ulaz1
call [scanf]
;;Umetni kod iz web-aplikacije:
;;OVDJE!
;;Ovo ne mijenjaj:
	fld dword [result]
	fst qword [esp+4]
	mov dword [esp],_izlaz
	call [printf]
invoke system,_pause
invoke exit,0

;;Ovdje se deklariraju konstante:
_izlaz1 db "Unesite vrijednost varijable 'result': ",0
_ulaz1 db "%f",0
_pause db "PAUSE",0
_izlaz db "Broj na vrhu sistemskog stoga je: %f.",10,0

section '.rdata' readable writable
;;Ovdje deklarirajte varijable.
;;'dd' znaci 32-bitni (kao float), isto sto i 'dword' (samo sto se 'dword' ne moze koristiti za deklaraciju).
result dd ?
alpha dd 30f

section '.idata' data readable import
library msvcrt,'msvcrt.dll' ;Microsoft Visual C Runtime Library (dobije se uz Windowse).
import msvcrt,printf,'printf',system,'system',exit,'exit',scanf,'scanf'
