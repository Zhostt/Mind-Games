install:
	npm ci
brain-game:
	node bin/brain-games.js
vs:
	code bin/brain-games.js
publish:
	 npm publish --dry-ru
lint:
	npx eslintn .