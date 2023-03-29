def cesar_code(code : str, decalage : int):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    res = ""

    for i in code:
        res += alpha[(alpha.index(i) - decalage) % 26]
    print(res)


# Ecrivez ici la fonction permettant de
# retrouver le message correspondant au code suivant
#
#       sekhqwu
#
