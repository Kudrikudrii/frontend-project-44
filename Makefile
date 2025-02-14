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

brain-calc: #Запуск игры с вычислениями
		node bin/brain-calc.js

brain-gcd: #Запуск игры с поиском наибольшего общего делителя
		node bin/brain-gcd.js

brain-progression: #Запуск игры поиск пропущенного значения в прогрессии
		node bin/brain-progression.js

brain-prime: #Запуск игры простое ли число
		node bin/brain-prime.js