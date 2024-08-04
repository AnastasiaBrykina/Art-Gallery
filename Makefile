build:
	docker build -t gallery .
run:
	docker run -d -p 5173:5173 -v "./:/app" -v /app/node_modules --name galleryContainer gallery
stop:
	docker stop galleryContainer