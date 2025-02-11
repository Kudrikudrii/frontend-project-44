install:#Установка зависимостей
		npm ci

brain-games: #Запуск игры
		node bin/brain-games.js

publish: #Установка publish
		npm publish --dry-run

lint: #Запуск npx eslint .
		npx eslint .

brain-even: #Запуск игры с четностью
		node bin/brain-even.js