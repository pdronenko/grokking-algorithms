install: install-deps

run:
	npx babel-node 'solutions/index.js' 10

install-deps:
	npm install

test:
	npm test

lint:
	npx eslint .

.PHONY: test
