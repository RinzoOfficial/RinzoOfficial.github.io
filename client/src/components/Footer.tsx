export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RINZO SEARCH. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground">
            Версия 1.0.1
          </p>
        </div>
      </div>
    </footer>
  );
}
