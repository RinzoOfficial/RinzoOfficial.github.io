import { Database, Phone, Mail, MessageCircle, Car, MapPin, Bot, Users } from "lucide-react";
import ScreenshotPreview from "@/components/ScreenshotPreview";
import { motion } from "framer-motion";
import databaseImg from "@assets/image_1762647471877.png";
import phoneImg from "@assets/{ADB3874D-F8B0-488D-B9CC-DCD2C0E521A3}_1762647481876.png";
import emailImg from "@assets/{EF7D9612-A0A4-4418-94F3-93D82DDEA6E4}_1762647539765.png";
import telegramImg from "@assets/{E91AFC95-8743-471A-8596-E2F8591DA8A4}_1762647547280.png";
import carImg from "@assets/{6E2D295A-9603-4164-A5CB-98B658806138}_1762647555801.png";
import addressImg from "@assets/{4E7D5928-A6B6-41EE-97D3-5C4BABD71CAD}_1762647564136.png";
import aiImg from "@assets/{25CFDB1B-6B53-4F60-BB31-58FA7FC3A947}_1762647577134.png";
import chatImg from "@assets/{E763ACAC-C853-416F-AE37-6F95944A2B96}_1762647710730.png";

export default function Features() {
  const features = [
    {
      icon: Database,
      title: "Поиск по базам",
      description: "Расширенный поиск в различных базах данных с использованием гибкого синтаксиса",
      details: [
        "Поддержка сложных запросов с операторами",
        "Фильтрация и сортировка результатов",
        "Экспорт найденных данных",
        "История всех поисковых запросов"
      ],
      color: "text-primary",
      screenshot: databaseImg
    },
    {
      icon: Phone,
      title: "Поиск по номеру",
      description: "Поиск информации по телефонному номеру в различных источниках",
      details: [
        "Определение оператора связи",
        "Регион регистрации номера",
        "Связанные аккаунты и профили",
        "История использования номера"
      ],
      color: "text-primary",
      screenshot: phoneImg
    },
    {
      icon: Mail,
      title: "Поиск по почте",
      description: "Анализ и поиск информации по email адресам",
      details: [
        "Проверка на утечки данных",
        "Связанные сервисы и регистрации",
        "Активность и статус адреса",
        "Анализ доменов и DNS записей"
      ],
      color: "text-accent",
      screenshot: emailImg
    },
    {
      icon: MessageCircle,
      title: "Поиск по Telegram",
      description: "Поиск информации в мессенджере Telegram",
      details: [
        "Поиск пользователей по username",
        "Анализ групп и каналов",
        "История сообщений (где доступно)",
        "Связи между аккаунтами"
      ],
      color: "text-accent",
      screenshot: telegramImg
    },
    {
      icon: Car,
      title: "Поиск по авто",
      description: "Поиск информации о транспорте и владельце по номеру",
      details: [
        "Данные о регистрации ТС",
        "История владельцев",
        "Штрафы и ограничения",
        "Технические характеристики"
      ],
      color: "text-chart-3",
      screenshot: carImg
    },
    {
      icon: MapPin,
      title: "Поиск по адресу",
      description: "Геолокация и поиск информации по адресу на карте",
      details: [
        "Точная геолокация адресов",
        "Кадастровые данные",
        "Жильцы и собственники",
        "История изменений"
      ],
      color: "text-chart-3",
      screenshot: addressImg
    },
    {
      icon: Bot,
      title: "ИИ Ассистент",
      description: "Интеллектуальный помощник для анализа и обработки данных",
      details: [
        "Автоматический анализ результатов",
        "Генерация отчетов и досье",
        "Выявление связей и паттернов",
        "Рекомендации по дальнейшему поиску"
      ],
      color: "text-chart-4",
      screenshot: aiImg
    },
    {
      icon: Users,
      title: "Общий чат",
      description: "Чат с другими пользователями платформы для обмена опытом",
      details: [
        "Обмен опытом и методиками",
        "Коллективный анализ данных",
        "Обсуждение сложных кейсов",
        "Поддержка сообщества"
      ],
      color: "text-chart-4",
      screenshot: chatImg
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="container px-6 md:px-12 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center" 
          data-testid="text-features-page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Основные функции
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          RINZO SEARCH предоставляет комплексный набор инструментов для профессионального поиска и анализа информации из различных источников
        </motion.p>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div 
                  className={`w-14 h-14 rounded-lg bg-secondary/50 flex items-center justify-center ${feature.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="h-7 w-7" />
                </motion.div>
                <h2 className="text-3xl font-bold" data-testid={`text-feature-${feature.title.toLowerCase()}`}>
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${feature.color} mt-2`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <ScreenshotPreview 
                  src={feature.screenshot} 
                  alt={feature.title}
                  className="w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
