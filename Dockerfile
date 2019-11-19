FROM httpd
COPY dist/Test /usr/appache2/local/htdocs
EXPOSE 80
CMD apachectl -D FOREGROUND
