install:
	npm ci
brain-game:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
vs:
	code bin/brain-games.js
publish:
	 npm publish --dry-run
lint:
	npx eslint .
