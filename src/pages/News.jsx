import { useState, useEffect } from 'react'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  
  // 模拟新闻数据
  const generateMockNews = (count = 12) => {
    const mockNews = []
    const categories = ['AI技术', '产品发布', '行业动态', '研究进展', '应用案例']
    
    for (let i = 1; i <= count; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      mockNews.push({
        id: `news-${i}`,
        title: `${randomCategory}：最新AI技术突破，为人工智能领域带来重大变革${i}`,
        image: `https://picsum.photos/seed/news${i}/800/400`,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        category: randomCategory
      })
    }
    
    return mockNews
  }
  
  useEffect(() => {
    // 模拟加载数据
    setLoading(true)
    setTimeout(() => {
      const mockNews = generateMockNews()
      setNews(mockNews)
      setLoading(false)
    }, 500)
  }, [])
  
  // 处理标签切换
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // 这里可以根据标签筛选新闻
  }
  
  return (
    <div className="news-page">
      <div className="page-header">
        <h1>每日AI资讯</h1>
        <p>关注AI领域的最新动态和前沿技术</p>
      </div>
      
      {/* 标签页 */}
      <div className="tabs">
        <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
          全部资讯
        </div>
        <div className={`tab ${activeTab === 'tech' ? 'active' : ''}`} onClick={() => handleTabChange('tech')}>
          技术动态
        </div>
        <div className={`tab ${activeTab === 'product' ? 'active' : ''}`} onClick={() => handleTabChange('product')}>
          产品发布
        </div>
        <div className={`tab ${activeTab === 'research' ? 'active' : ''}`} onClick={() => handleTabChange('research')}>
          研究进展
        </div>
      </div>
      
      {/* 新闻列表 */}
      {loading ? (
        <div className="loading">加载中...</div>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <a href="#" key={item.id} className="news-card">
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <div className="news-meta">
                  <span>{item.category}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default News