import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <section className="container px-6 md:px-12 py-16 max-w-4xl">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-privacy-title">
          Политика конфиденциальности
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          RINZO SEARCH
        </p>

        <div className="space-y-8 text-foreground/90">
          <section className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Дата обновления: 2024
            </p>
            <p className="leading-relaxed">
              Данная Политика конфиденциальности (далее – «Политика») описывает, каким образом сервис RINZO SEARCH 
              (далее – «Сервис», «мы») обрабатывает и защищает данные пользователей при использовании наших продуктов и инструментов.
            </p>
            <p className="leading-relaxed">
              Мы уважаем конфиденциальность каждого пользователя и стремимся обеспечить максимальную прозрачность в том, как работает Сервис.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Общие положения
            </h2>
            <p className="leading-relaxed">
              RINZO SEARCH предоставляет возможность поиска и анализа информации из открытых и закрытых источников, 
              в том числе для выявления утечек данных, проверки безопасности и иных исследовательских целей.
            </p>
            <p className="leading-relaxed">
              Мы предоставляем данные «как есть» (as is), в режиме реального времени, без их изменения или интерпретации.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Сбор данных
            </h2>
            <p className="leading-relaxed font-semibold">
              Мы НЕ собираем и НЕ храним:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Личные данные пользователей</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Логи запросов</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Историю поиска</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>IP-адреса</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Уникальные идентификаторы</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Куки, отслеживающие активность пользователя</span>
              </li>
            </ul>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-medium">
                Сервис обрабатывает запросы на лету, не сохраняя их на наших серверах.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Обработка запросов и результатов
            </h2>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Запросы обрабатываются автоматически</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Данные, которые пользователь получает в результате поиска, доступны исключительно пользователю, который выполнил этот запрос</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Мы не имеем доступа к содержанию запросов и не осуществляем мониторинг пользовательской активности</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Передача данных третьим лицам
            </h2>
            <p className="leading-relaxed">
              Мы не передаем, не продаём и не предоставляем данные пользователей третьим лицам.
            </p>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="font-medium text-accent-foreground">
                Поскольку мы не храним пользовательские данные, передавать их объективно невозможно.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-destructive pl-4">
              Ответственность
            </h2>
            <p className="leading-relaxed">
              Сервис не несёт ответственность за:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                <span>accuracy (точность)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                <span>полноту</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                <span>актуальность</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                <span>законность использования данных, полученных пользователем</span>
              </li>
            </ul>
            <p className="leading-relaxed">
              Мы лишь предоставляем инструменты для поиска и агрегации информации.
            </p>
            <p className="leading-relaxed font-semibold">
              Все риски использования данных несёт пользователь.
            </p>
            <p className="leading-relaxed">
              Пользователь обязуется самостоятельно соблюдать законы своей страны и использовать полученную информацию 
              исключительно в законных целях (например: проверка собственных данных на утечки, аудит безопасности и т.д.)
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Использование сервисов сторонних поставщиков
            </h2>
            <p className="leading-relaxed">
              RINZO SEARCH может использовать технические серверные решения сторонних провайдеров 
              (например, облачные вычислительные мощности) для обработки запросов.
            </p>
            <p className="leading-relaxed">
              При этом они также не получают и не хранят информацию о пользователе, т.к. запросы не логируются.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">
              Изменения Политики
            </h2>
            <p className="leading-relaxed">
              Мы можем обновлять эту Политику время от времени.
            </p>
            <p className="leading-relaxed">
              Актуальная версия всегда доступна пользователю.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Используя сервис RINZO SEARCH, вы подтверждаете, что ознакомились с данной Политикой и согласны с её условиями.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
