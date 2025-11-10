import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const discoveries = [
  { year: 1800, title: 'Электрическая батарея', author: 'Алессандро Вольта', category: 'physics', description: 'Первый источник постоянного электрического тока' },
  { year: 1831, title: 'Электромагнитная индукция', author: 'Майкл Фарадей', category: 'physics', description: 'Основа для создания электрогенераторов и трансформаторов' },
  { year: 1859, title: 'Теория эволюции', author: 'Чарльз Дарвин', category: 'biology', description: 'Происхождение видов путём естественного отбора' },
  { year: 1876, title: 'Телефон', author: 'Александр Белл', category: 'tech', description: 'Первое устройство для передачи речи на расстояние' },
  { year: 1879, title: 'Лампа накаливания', author: 'Томас Эдисон', category: 'tech', description: 'Практичное электрическое освещение' },
  { year: 1885, title: 'Вакцина от бешенства', author: 'Луи Пастер', category: 'medicine', description: 'Первая успешная вакцина против смертельной болезни' },
  { year: 1895, title: 'Рентгеновские лучи', author: 'Вильгельм Рёнтген', category: 'physics', description: 'Открытие проникающего излучения для медицинской диагностики' },
  { year: 1896, title: 'Радиоактивность', author: 'Анри Беккерель', category: 'physics', description: 'Открытие самопроизвольного излучения урана' },
  { year: 1898, title: 'Радий и полоний', author: 'Мария Кюри', category: 'chemistry', description: 'Открытие новых радиоактивных элементов' },
  { year: 1903, title: 'Первый полёт', author: 'Братья Райт', category: 'tech', description: 'Управляемый полёт тяжелее воздуха' },
  { year: 1905, title: 'Теория относительности', author: 'Альберт Эйнштейн', category: 'physics', description: 'Революция в понимании пространства и времени' },
  { year: 1913, title: 'Модель атома', author: 'Нильс Бор', category: 'physics', description: 'Квантовая модель строения атома' },
];

const scientists = [
  { name: 'Томас Эдисон', years: '1847-1931', field: 'Изобретатель', achievements: '1093 патента, включая фонограф и кинетоскоп', image: '🔬' },
  { name: 'Мария Кюри', years: '1867-1934', field: 'Физик, химик', achievements: 'Две Нобелевские премии, исследования радиоактивности', image: '⚛️' },
  { name: 'Никола Тесла', years: '1856-1943', field: 'Инженер-электрик', achievements: 'Переменный ток, беспроводная передача энергии', image: '⚡' },
  { name: 'Луи Пастер', years: '1822-1895', field: 'Микробиолог', achievements: 'Пастеризация, вакцины от бешенства и сибирской язвы', image: '🦠' },
];

function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Все', icon: 'Globe' },
    { id: 'physics', label: 'Физика', icon: 'Atom' },
    { id: 'chemistry', label: 'Химия', icon: 'Flask' },
    { id: 'biology', label: 'Биология', icon: 'Dna' },
    { id: 'medicine', label: 'Медицина', icon: 'Heart' },
    { id: 'tech', label: 'Технологии', icon: 'Cpu' },
  ];

  const filteredDiscoveries = discoveries.filter(d => 
    selectedCategory === 'all' || d.category === selectedCategory
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">📚</div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary-foreground">Эпоха Открытий</h1>
                <p className="text-sm text-primary-foreground/80">Наука и технологии XIX–XX веков</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('timeline')} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Хронология</button>
              <button onClick={() => scrollToSection('discoveries')} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Открытия</button>
              <button onClick={() => scrollToSection('scientists')} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Учёные</button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">⚗️</div>
          <div className="absolute top-32 right-20 text-6xl">🔭</div>
          <div className="absolute bottom-20 left-1/3 text-7xl">💡</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in">
            Величайшие открытия<br />человечества
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in">
            Путешествие сквозь столетие научного прогресса, изменившее наш мир навсегда
          </p>
          <Button size="lg" variant="secondary" className="animate-scale-in" onClick={() => scrollToSection('timeline')}>
            <Icon name="ArrowDown" className="mr-2" size={20} />
            Исследовать
          </Button>
        </div>
      </section>

      <section id="timeline" className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Временная шкала</h2>
            <p className="text-muted-foreground text-lg">1800–1920: век прорывов</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {filteredDiscoveries.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="p-6 hover-scale cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="text-sm">{item.category}</Badge>
                      </div>
                      <h3 className="text-xl font-serif font-bold mt-3 mb-2">{item.title}</h3>
                      <p className="text-sm text-primary font-semibold mb-2">{item.author}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="discoveries" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Открытия и изобретения</h2>
            <p className="text-muted-foreground text-lg mb-8">Отфильтруйте по областям науки</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="gap-2"
                >
                  <Icon name={cat.icon as any} size={18} />
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiscoveries.map((item, index) => (
              <Card key={index} className="p-6 hover-scale animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-lg font-bold">{item.year}</Badge>
                  <Badge>{item.category}</Badge>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{item.author}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="scientists" className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Великие учёные</h2>
            <p className="text-muted-foreground text-lg">Люди, изменившие мир</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scientists.map((scientist, index) => (
              <Card key={index} className="p-6 text-center hover-scale animate-fade-in">
                <div className="text-6xl mb-4">{scientist.image}</div>
                <h3 className="text-xl font-serif font-bold mb-1">{scientist.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{scientist.years}</p>
                <Badge variant="secondary" className="mb-4">{scientist.field}</Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">{scientist.achievements}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-primary-foreground/80">Образовательный проект об истории науки и технологий</p>
          <p className="text-xs text-primary-foreground/60 mt-2">XIX–XX века: эпоха, изменившая человечество</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;