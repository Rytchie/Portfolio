from bs4 import BeautifulSoup

with open('practice.html', 'r') as html_file:
    content = html_file.read()
    soup = BeautifulSoup(content, 'lxml')
    print(soup)