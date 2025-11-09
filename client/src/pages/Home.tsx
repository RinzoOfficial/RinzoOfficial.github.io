import { Database, Phone, Mail, MessageCircle, Car, MapPin, Bot, Users, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import ScreenshotPreview from "@/components/ScreenshotPreview";
import { Link } from "wouter";
import { motion } from "framer-motion";
import mainImg from "@assets/main_1762647009330.jpg";
import menuImg from "@assets/menu_1762647009330.jpg";

export default function Home() {
  const mainFeatures = [
    { icon: Database, title: "Поиск по базам", description: "Поиск в различных базах данных с использованием гибкого синтаксиса", color: "text-primary" },
    { icon: Phone, title: "Поиск по номеру", description: "Поиск информации по телефонному номеру", color: "text-primary" },
    { icon: Mail, title: "Поиск по почте", description: "Анализ и поиск по email адресам", color: "text-accent" },
    { icon: MessageCircle, title: "Поиск по Telegram", description: "Поиск информации в Telegram", color: "text-accent" },
    { icon: Car, title: "Поиск по авто", description: "Поиск информации о транспорте и владельце", color: "text-chart-3" },
    { icon: MapPin, title: "Поиск по адресу", description: "Геолокация адреса на карте", color: "text-chart-3" },
    { icon: Bot, title: "ИИ Ассистент", description: "Интеллектуальный помощник для анализа", color: "text-chart-4" },
    { icon: Users, title: "Общий чат", description: "Чат с пользователями платформы", color: "text-chart-4" },
  ];

  const stats = [
    { icon: Database, value: "25ТБ", label: "Активных баз данных", color: "text-primary" },
    { icon: Zap, value: "98.7%", label: "Точность поиска", color: "text-accent" },
    { icon: Shield, value: "0", label: "Хранимых данных", color: "text-chart-3" },
    { icon: Clock, value: "<1с", label: "Среднее время поиска", color: "text-chart-4" },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative z-10 px-6 md:px-12 py-20 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent" 
            data-testid="text-hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            RINZO SEARCH
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Профессиональная платформа OSINT
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Поиск и анализ информации из открытых и закрытых источников для проверки безопасности и исследовательских целей
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/features">
              <Button size="lg" className="text-base px-8" data-testid="button-explore-features">
                Узнать больше
              </Button>
            </Link>
            <Link href="/privacy">
              <Button size="lg" variant="outline" className="text-base px-8 backdrop-blur-md" data-testid="button-privacy">
                Конфиденциальность
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} iconColor={stat.color} index={index} />
          ))}
        </div>
      </section>

      <section className="container px-6 md:px-12 py-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center" 
          data-testid="text-features-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Основные функции
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Полный набор инструментов для профессионального поиска и анализа информации
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} iconColor={feature.color} index={index} />
          ))}
        </div>
      </section>

      <section className="container px-6 md:px-12 py-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Интерфейс платформы
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h3 
            className="text-2xl font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Главная панель
          </motion.h3>
          <motion.p 
            className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Удобный интерфейс с быстрым доступом ко всем основным функциям поиска. Интуитивная навигация и современный дизайн для эффективной работы.
          </motion.p>
          <ScreenshotPreview src={menuImg} alt="Главная панель" className="w-full" />
        </div>
      </section>
    </div>
  );
}
