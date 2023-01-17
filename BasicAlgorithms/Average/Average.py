import sys

# The better way for solving questions like this is uses built in functions like -sum- -len- and ...
# because these type functions are optimize for large data and its better to use this function
# instead of creating our Functions


def get_array_of_numbers(message):
    """ This Function Only Array of Numbers in form of <1,2,3,4,5> """
    while True:
        data = input(message)
        data = data.strip().split(",")
        for index, value in enumerate(data):
            try:
                # change data in actuall list ('aka' pass by refrence) 
                # for better Performance
                data[index] = int(data[index])
            except ValueError:
                sys.exit("\n\nInvalid input :(\ninput Must in Form Of 1,2,3,4,5\nseprate with ,\n\n")

        return data



def our_sum(data):
    """ 
        this function take two option for calculate sum

        solution one:
            take one arg : int
            

        solution two:
            take a list of numbers 

    """
    sum_arr = 0
    # if input is array
    if type(data) is list: 
        for index, value in enumerate(data):
            try:
                data[index] = int(data[index])
                sum_arr += data[index]
            except ValueError:
                raise ValueError(f" -{data[index]} Is not An number-")
        return sum_arr
    # if input is single int 
    if type(data) is int:
        return data

def our_len(data : list):
    """ 
        this function take an array
        and return len of that array
    """
    len_ar = 0
    for each in data:
        len_ar +=1
    return len_ar


def main():
    # Solution One Use Sum and len build in Func
    # data = get_array_of_numbers("Enter Numbers: ")
    # pint(sum(data) /len(data))
    
    # Solution Write Our sum and len Functions
    data = get_array_of_numbers("Enter Numbers: ")
    print(our_sum(data) / our_len(data))



if __name__ == "__main__":
    main()