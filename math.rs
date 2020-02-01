const PRECISION: f64=512.; //Balance between speed and precision here.

fn ln(x:f64) -> f64 {
    let mut sum=0 as f64;
    let epsilon=(x-1.)/(5.*PRECISION);
    let mut i=1 as f64;
    while (epsilon>0. && i<x) || (epsilon<0. && i>x) {
        sum+=epsilon/i;
        i+=epsilon;
    }
    return sum;
}

fn exp(x:f64) -> f64 {
    let mut min=0 as f64;
    let mut max=1000 as f64;
    let mut i=(min+max)/2.;
    while max-min>(1./(5.*PRECISION)) {
        if ln(i)>x {
            max=i;
        }
        else {
            min=i;
        }
        i=(min+max)/2.;
    }
    return i;

}

fn arctan(x:f64) -> f64 {
    let mut sum=0 as f64;
    let epsilon=x/PRECISION;
    let mut i=0 as f64;
    while i<x {
        sum+=epsilon/(1.+i*i);
        i+=epsilon;
    }
    return sum*(180./pi());
}

fn tan(x:f64) -> f64 {
    if x>90. {return -1./tan(x-90.);}
    if x>45. {return 1./tan(90.-x);} 
    let mut min=0 as f64;
    let mut max=1000 as f64;
    let mut i=(min+max)/2.;
    while max-min>(1./(3.*PRECISION)) {
        if arctan(i)>x {
            max=i;
        }
        else {
            min=i;
        }
        i=(min+max)/2.;
    }
    return i;
}

fn sin(x:f64) -> f64 {
    if x>90. {return cos(x-90.);}
    let tn=tan(x);
    return 1./sqrt(1./(tn*tn)+1.);
}

fn arcsin(x:f64) -> f64 {
    return arctan(x/sqrt(1.-x*x));
}

fn arccos(x:f64) -> f64 {
    return 90.-arcsin(x);
}

fn cos(x:f64) -> f64 {
    if x>90. {return -sin(x-90.);}
    return sin(90.-x);
}

fn sqrt(x:f64) -> f64 {
    let mut max=1000 as f64;
    let mut min=0 as f64;
    let mut i=(min+max)/2.;
    while (max-min)>1./PRECISION {
        if i*i>x {
            max=i;
        }
        else {
            min=i;
        }
        i=(max+min)/2.;
    }
    return i;
}

fn pi() -> f64 {
    let mut sum=0 as f64;
    let mut i=-1 as f64;
    let epsilon=1./PRECISION;
    while i<1. {
        sum+=epsilon/(1.+i*i);
        i+=epsilon;
    }
    return 2.*sum;
}

fn main() {
    println!("x\tsin(x)\tcos(x)\ttan(x)\tln(x)\tsqrt(x)\tasin\tacos\tatan");
    for i in 0..101 {
        print!("{:.4}\t",i);
        print!("{:.4}\t",sin(i as f64));
        print!("{:.4}\t",cos(i as f64));
        if tan(i as f64)<100. && tan(i as f64)> -10. {print!("{:.4}\t",tan(i as f64));} else if tan(i as f64)< -10. {print!("{:.3}\t",tan(i as f64));} else {print!("inf\t");}
        if ln(i as f64)> -100. {print!("{:.4}\t",ln(i as f64));} else {print!("-inf\t");}
        print!("{:.4}\t",sqrt(i as f64));
        if arcsin((i as f64)/100.)<90. {print!("{:.4}\t",arcsin((i as f64)/100.));} else {print!("90\t");}
        if arccos((i as f64)/100.)<90. && arccos((i as f64)/100.)>0. {print!("{:.4}\t",arccos((i as f64)/100.));} else if arccos((i as f64)/100.)>0. {print!("90\t");} else {print!("0\t");}
        print!("{:.4}\n",arctan((i as f64)/100.));
    }
    println!("pi={:.4}",pi());
    println!("rad={:.4}",180./pi());
    println!("ln(1/pi)={:.4}",ln(1./pi()));
    println!("e={:.4}",exp(1 as f64));
}