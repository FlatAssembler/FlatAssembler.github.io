const PRECISION: f64 = 512.; //Balance between speed and precision here.

fn abs(x: f64) -> f64 {
    if x < 0. {
        return -x;
    }
    x
}

fn ln(x: f64) -> f64 {
    let mut sum = 0.;
    let epsilon = (x - 1.) / (5. * PRECISION);
    let mut i = 1.;
    while (epsilon > 0. && i < x) || (epsilon < 0. && i > x) {
        sum += epsilon / i;
        i += epsilon;
    }
    sum
}

fn exp(x: f64) -> f64 {
    let mut i = 0.;
    let mut y = 1.;
    let epsilon = x / PRECISION;
    while (epsilon > 0. && i < x) || (epsilon < 0. && i > x) {
        y += epsilon * y;
        i += epsilon;
    }
    y
}

fn arctan(x: f64) -> f64 {
    let mut sum = 0.;
    let epsilon = x / PRECISION;
    let mut i = 0.;
    while i < x {
        sum += epsilon / (1. + i * i);
        i += epsilon;
    }
    sum * (180. / pi())
}

fn atan2(y: f64, x: f64) -> f64 {
    if (y == 0.) {
        if (x < 0.) {
            return 180.;
        } else {
            return 0.;
        }
    } else if (x == 0.) {
        if (y < 0.) {
            return 270.;
        } else {
            return 90.;
        }
    } else {
        if (x > 0. && y > 0.) {
            return arctan(y / x);
        } else if (x < 0. && y > 0.) {
            return 90. + arctan(-x / y);
        } else if (x < 0. && y < 0.) {
            return 180. + arctan(y / x);
        } else {
            return 270. + arctan(-x / y);
        }
    }
    return 360.;
}

fn tan(degrees: f64) -> f64 {
    sin(degrees) / cos(degrees)
}

fn sin(degrees: f64) -> f64 {
    if degrees < 0. {
        return -sin(-degrees);
    }
    if degrees > 90. {
        return cos(degrees - 90.);
    }
    let radians = degrees / (180. / pi());
    let mut tmpsin = 0.;
    let mut tmpcos = 1.;
    let epsilon = radians / PRECISION;
    let mut i = 0.;
    while (epsilon > 0. && i < radians) || (epsilon < 0. && i > radians) {
        tmpsin += epsilon * tmpcos;
        tmpcos -= epsilon * tmpsin;
        i += epsilon;
    }
    tmpsin
}

fn arcsin(x: f64) -> f64 {
    arctan(x / sqrt(1. - x * x))
}

fn arccos(x: f64) -> f64 {
    90. - arcsin(x)
}

fn cos(degrees: f64) -> f64 {
    sin(90. - degrees)
}

fn sqrt(x: f64) -> f64 {
    let mut max = 1000.;
    let mut min = 0.;
    let mut i = (min + max) / 2.;
    while (max - min) > 1. / PRECISION {
        if i * i > x {
            max = i;
        } else {
            min = i;
        }
        i = (max + min) / 2.;
    }
    i
}

fn pi() -> f64 {
    let mut sum = 0.;
    let mut i = -1.;
    let epsilon = 1. / PRECISION;
    while i < 1. {
        sum += epsilon / (1. + i * i);
        i += epsilon;
    }
    2. * sum
}

fn main() {
    if (abs(atan2(sin(30.), cos(30.)) - 30.) > 1.
        || abs(atan2(sin(90. + 30.), cos(90. + 30.)) - (90. + 30.)) > 1.
        || abs(atan2(sin(180. + 30.), cos(180. + 30.)) - (180. + 30.)) > 1.
        || abs(atan2(sin(270. + 30.), cos(270. + 30.)) - (270. + 30.)) > 1.)
    {
        println!("\"atan2\" seems not to work!");
        return;
    }
    println!("x\tsin(x)\tcos(x)\ttan(x)\tln(x)\tsqrt(x)\tasin\tacos\tatan");
    for i in 0..101 {
        print!("{:.4}\t", i);
        print!("{:.4}\t", sin(i as f64));
        print!("{:.4}\t", cos(i as f64));
        if tan(i as f64) < 100. && tan(i as f64) > -10. {
            print!("{:.4}\t", tan(i as f64));
        } else if tan(i as f64) < -10. {
            print!("{:.3}\t", tan(i as f64));
        } else {
            print!("inf\t");
        }
        if ln(i as f64) > -100. {
            print!("{:.4}\t", ln(i as f64));
        } else {
            print!("-inf\t");
        }
        print!("{:.4}\t", sqrt(i as f64));
        if arcsin((i as f64) / 100.) < 90. {
            print!("{:.4}\t", arcsin((i as f64) / 100.));
        } else {
            print!("90\t");
        }
        if arccos((i as f64) / 100.) < 90. && arccos((i as f64) / 100.) > 0. {
            print!("{:.4}\t", arccos((i as f64) / 100.));
        } else if arccos((i as f64) / 100.) > 0. {
            print!("90\t");
        } else {
            print!("0\t");
        }
        print!("{:.4}\n", arctan((i as f64) / 100.));
    }
    println!("pi={:.4}", pi());
    println!("rad={:.4}", 180. / pi());
    println!("ln(1/pi)={:.4}", ln(1. / pi()));
    println!("e={:.4}", exp(1 as f64));
    println!("1/e={:.4}", exp(-1 as f64));
}
