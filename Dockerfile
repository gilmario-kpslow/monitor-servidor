FROM nginx:latest
LABEL manteiner "gilmariosoftware"
COPY public/* /usr/share/nginx/html/