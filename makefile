install:
	npm ci
brain-game:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
vs:
	code bin/brain-games.js
publish:
	 npm publish --dry-run
lint:
	npx eslint .
