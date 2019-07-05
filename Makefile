install: install-deps

run:
	npx babel-node 'solutions/index.js' 10

install-deps:
	npm install

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

.PHONY: test
