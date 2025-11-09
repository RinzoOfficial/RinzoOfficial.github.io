import { Network, History, BookOpen, FileText, Download, BarChart3 } from "lucide-react";
import ScreenshotPreview from "@/components/ScreenshotPreview";
import { motion } from "framer-motion";
import grafImg from "@assets/graf_1762647009330.jpg";
import historyImg from "@assets/{F039F678-2E3D-4BBF-A7A7-38F35AFCC3F6}_1762648375117.png";
import dossierImg from "@assets/{C6DE195A-64E6-49FA-AAB3-B27E0CD9D73D}_1762648444770.png";
import reportImg from "@assets/image_1762648455025.png";
import exportImg from "@assets/ExportData_1762647009330.jpg";
import analyticsImg from "@assets/StatisticAnalitic_1762647009332.jpg";

export default function Tools() {
  const tools = [
    {
      icon: Network,
      title: "Граф связей",
      description: "Визуализация связей и зацепок между найденными данными",
      details: [
        "Интерактивная визуализация связей",
        "Автоматическое построение графа зависимостей",
        "Фильтрация по типам связей",
        "Экспорт графа в различных форматах"
      ],
      color: "text-primary",
      screenshot: grafImg
    },
    {
      icon: History,
      title: "История запросов",
      description: "Просмотр и управление историей всех поисковых запросов",
      details: [
        "Полная история всех запросов",
        "Фильтрация по дате и типу поиска",
        "Быстрое повторение запросов",
        "Данные хранятся локально на вашем устройстве"
      ],
      color: "text-accent",
      screenshot: historyImg,
      note: "Все данные хранятся локально. Мы не храним никакую информацию о ваших запросах."
    },
    {
      icon: BookOpen,
      title: "История досье",
      description: "Управление сгенерированными досье на основе поисковых данных",
      details: [
        "Создание детальных досье",
        "Систематизация найденной информации",
        "Версионирование и обновление досье",
        "Безопасное локальное хранение"
      ],
      color: "text-chart-3",
      screenshot: dossierImg,
      note: "Данные хранятся локально и полностью контролируются вами."
    },
    {
      icon: FileText,
      title: "Генератор отчётов",
      description: "Создание и управление аналитическими отчётами",
      details: [
        "Автоматическая генерация отчётов",
        "Настраиваемые шаблоны",
        "Экспорт в PDF, DOCX и другие форматы",
        "Статистика и аналитика по запросам"
      ],
      color: "text-chart-4",
      screenshot: reportImg
    },
    {
      icon: Download,
      title: "Экспорт данных",
      description: "Экспорт результатов поиска и аналитических данных",
      details: [
        "Множество форматов экспорта (JSON, CSV, XML)",
        "Выборочный экспорт данных",
        "Сохранение истории запросов",
        "Экспорт аналитических отчётов"
      ],
      color: "text-primary",
      screenshot: exportImg
    },
    {
      icon: BarChart3,
      title: "Аналитика",
      description: "Инструменты для глубокого анализа и статистики",
      details: [
        "Детальная статистика использования",
        "Графики и диаграммы активности",
        "Анализ эффективности поиска",
        "Тренды и паттерны в данных"
      ],
      color: "text-accent",
      screenshot: analyticsImg
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="container px-6 md:px-12 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center" 
          data-testid="text-tools-page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Дополнительные инструменты
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Расширенные возможности для анализа, визуализации и управления найденными данными
        </motion.p>

        <div className="space-y-24">
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
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
                  className={`w-14 h-14 rounded-lg bg-secondary/50 flex items-center justify-center ${tool.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <tool.icon className="h-7 w-7" />
                </motion.div>
                <h2 className="text-3xl font-bold" data-testid={`text-tool-${tool.title.toLowerCase()}`}>
                  {tool.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                {tool.note && (
                  <motion.div 
                    className="p-4 rounded-lg bg-primary/10 border border-primary/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <p className="text-sm text-primary font-medium">{tool.note}</p>
                  </motion.div>
                )}
                <ul className="space-y-3">
                  {tool.details.map((detail, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${tool.color} mt-2`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <ScreenshotPreview 
                  src={tool.screenshot} 
                  alt={tool.title}
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
