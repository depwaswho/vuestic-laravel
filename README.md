## Run Application

```
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan config:cache
npm run dev
php artisan serve
```