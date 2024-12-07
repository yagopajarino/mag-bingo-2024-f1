import pandas as pd
import requests
import json
import sys
import numpy as np
import pdfkit


# Lista de tuplas (nombre, tipo)
def getF1():
    j = open("../server/data/f1.json", "r")
    data = json.load(j)

    f1 = []
    for x in data:
        nombre = x["nombre"]
        tipo = x["tipo"]
        f1.append((nombre, tipo))

    f1 = sorted(f1, key=lambda x: x[0])
    return f1


def getHTMLCarton(f1, n_carton):
    res = """
    <div>
        <p style='font-size: 30px'><strong>Bingo MAG F1.</strong>
    """
    res += f"Cartón nro: {str(n_carton).zfill(3)}</p>"
    res += """
        <table>
    """
    nros = sorted(list(np.random.choice(range(0, len(f1)), 12, replace=False)))
    pos1 = list(np.random.choice([0, 3, 6, 9, 12, 15], 4, replace=False))
    pos2 = list(np.random.choice([1, 4, 7, 10, 13, 16], 4, replace=False))
    pos3 = list(np.random.choice([2, 5, 8, 11, 14, 17], 4, replace=False))

    pos = sorted([*pos1, *pos2, *pos3])
    row1 = "<tr>"
    row2 = "<tr>"
    row3 = "<tr>"
    for nCol in range(0, 6):
        n = [0, 0, 0]
        for nRow in range(0, 3):
            p = 3 * nCol + nRow
            if p in pos:
                # nombre = str(tracks[nros[0]][0])
                inner_html = (
                    str(f1[nros[0]][0]).capitalize() + "<br><br>" + str(f1[nros[0]][1])
                )
                if p % 3 == 0:
                    n[0] += 1
                    row1 += "<td class='filled'>{}</td>".format(inner_html)
                elif p % 3 == 1:
                    n[1] += 1
                    row2 += "<td class='filled'>{}</td>".format(inner_html)
                else:
                    n[2] += 1
                    row3 += "<td class='filled'>{}</td>".format(inner_html)
                nros = nros[1:]
        if n[0] == 0:
            row1 += "<td class='empty'></td>"
        if n[1] == 0:
            row2 += "<td class='empty'></td>"
        if n[2] == 0:
            row3 += "<td class='empty'></td>"

    row1 += "</tr>"
    row2 += "</tr>"
    row3 += "</tr>"

    res += row1
    res += row2
    res += row3

    res += "</table></div>"
    return res


def getHTML(paises, n_carton):
    print("Printing {}".format(n_carton))
    html_code = """
    <html>
        <style>
            body {
                text-align:center;
                font-family:Arial;
                color: #000000;
                align-items:center
            }

            td {
                border: 2px solid;
                width:140px;
                height:140px;
                padding: 10px;
            }

            .empty {
                background-color: #000000;
            }

            .filled {
                text-align:center;
                font-weight: book;
                font-size: 20px;
            }

            p{
                padding-top: 20px;
            }

            a {
                text-decoration:none;
            }

            .footer {
                position:absolute;
                bottom:0;
                width:100%;
                text-align:center;
            }
        </style>
        <body>
            """
    html_code += getHTMLCarton(paises, n_carton)
    html_code += getHTMLCarton(paises, n_carton + 1)

    html_code += """    
    </body>
    </html>
    """
    return html_code


def saveCartonPDF(html, n):
    options = {
        # "orientation":"Landscape",
        # 'page-height': '25cm',
        # 'page-width': '20cm',
        "encoding": "UTF-8",
        "quiet": "",
    }

    nombre_carton = "./f1/F1_{}.pdf".format(str(n).zfill(3))
    pdfkit.from_string(html, nombre_carton, options=options)


def main():
    cant = int(input("Nro de cartones: "))
    f1 = getF1()
    for x in range(1, cant + 1, 2):
        html = getHTML(f1, x)
        # print(html)
        saveCartonPDF(html, x)


if __name__ == "__main__":
    main()
