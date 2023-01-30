use std::io::stdin;

// lets add some rust to this repo ;)
fn main() {

	let mut input = String::new();
	stdin().read_line(&mut input).unwrap();

	let mut num: i32 = match input.trim().to_string().parse(){
		Ok(n) => if n>0 { n } else{ panic!("enter n>0") },
		Err(_e) => panic!("enter a valid number")
	};

	while num != 1{
		print!("{}->",num);
		num = if num%2==0 { num / 2 } else { (num*3)+1 };
	}
	println!("1");
}
