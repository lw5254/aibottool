import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // 工具分类数据
  const categories = [
    { id: 'ai-writing', name: 'AI写作工具', count: 150, icon: '✍️' },
    { id: 'ai-image', name: 'AI图像工具', count: 180, icon: '🎨' },
    { id: 'ai-video', name: 'AI视频工具', count: 120, icon: '🎬' },
    { id: 'ai-office', name: 'AI办公工具', count: 200, icon: '💼' },
    { id: 'ai-agent', name: 'AI智能体', count: 80, icon: '🤖' },
    { id: 'ai-chat', name: 'AI聊天助手', count: 100, icon: '💬' },
    { id: 'ai-coding', name: 'AI编程工具', count: 130, icon: '💻' },
    { id: 'ai-design', name: 'AI设计工具', count: 95, icon: '🖌️' },
    { id: 'ai-audio', name: 'AI音频工具', count: 75, icon: '🎵' },
    { id: 'ai-search', name: 'AI搜索引擎', count: 60, icon: '🔍' },
    { id: 'ai-platform', name: 'AI开发平台', count: 90, icon: '🛠️' },
    { id: 'ai-learning', name: 'AI学习网站', count: 110, icon: '📚' },
    { id: 'ai-model', name: 'AI训练模型', count: 85, icon: '🧠' },
    { id: 'ai-detection', name: 'AI内容检测', count: 70, icon: '🔍' }
  ]
  
  // 热门工具数据
  const hotTools = [
    { id: 1, name: '豆包', logo: 'https://picsum.photos/seed/tool1/100' },
    { id: 2, name: '即梦AI', logo: 'https://picsum.photos/seed/tool2/100' },
    { id: 3, name: 'Qoder', logo: 'https://picsum.photos/seed/tool3/100' },
    { id: 4, name: 'AiPPT', logo: 'https://picsum.photos/seed/tool4/100' },
    { id: 5, name: '秘塔AI搜索', logo: 'https://picsum.photos/seed/tool5/100' },
    { id: 6, name: 'TRAE编程', logo: 'https://picsum.photos/seed/tool6/100' },
    { id: 7, name: '堆友AI', logo: 'https://picsum.photos/seed/tool7/100' },
    { id: 8, name: '文心一言', logo: 'https://picsum.photos/seed/tool8/100' }
  ]
  
  // 搜索社区数据
  const communities = [
    { id: 'bing', name: 'Bing', icon: '🔍' },
    { id: 'baidu', name: '百度', icon: '🔍' },
    { id: 'google', name: 'Google', icon: '🔍' },
    { id: 'perplexity', name: 'Perplexity', icon: '🔍' },
    { id: 'you', name: 'YOU', icon: '🔍' },
    { id: '360', name: '360', icon: '🔍' },
    { id: 'sogou', name: '搜狗', icon: '🔍' },
    { id: 'huggingface', name: 'Hugging Face', icon: '🤗' },
    { id: 'github', name: 'GitHub', icon: '📁' },
    { id: 'paddle', name: '飞桨', icon: '⚙️' },
    { id: 'modelscope', name: '魔搭', icon: '🧩' }
  ]
  
  // 热门AI教程数据
  const hotTutorials = [
    { id: 1, title: 'Qoder – AI Agentic 编程工具', description: '阿里巴巴推出的新一代AI编程助手' },
    { id: 2, title: 'OpenAI《构建 Agents 实用指南》', description: 'OpenAI官方出品的Agent开发指南（PDF）' },
    { id: 3, title: 'Claude 官方发布《Agent 构建指南》', description: 'Claude中文版Agent开发教程' },
    { id: 4, title: '谷歌《智能体Agent》白皮书', description: '谷歌官方AI智能体技术白皮书' },
    { id: 5, title: 'Anthropic《AI 经济指数报告》', description: '38页PDF详细分析AI经济影响' },
    { id: 6, title: '谷歌《Prompt Engineering》提示词工程白皮书', description: '谷歌官方提示词工程指南' }
  ]
  
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // 这里可以实现搜索逻辑
      console.log('搜索:', searchTerm)
    }
  }
  
  return (
    <div className="home-page">
      {/* 搜索框部分 */}
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="搜索AI工具、AI模型、AI教程..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            搜索
          </button>
        </form>
      </div>
      
      {/* 搜索推荐标签 */}
      <div className="search-suggestions">
        <div className="suggestions-title">常用搜索:</div>
        <div className="suggestion-tags">
          <span className="suggestion-tag">AI写作</span>
          <span className="suggestion-tag">AI绘画</span>
          <span className="suggestion-tag">ChatGPT</span>
          <span className="suggestion-tag">Claude</span>
          <span className="suggestion-tag">文心一言</span>
          <span className="suggestion-tag">AI编程</span>
          <span className="suggestion-tag">AI视频生成</span>
          <span className="suggestion-tag">提示词工程</span>
        </div>
      </div>
      
      {/* 工具分类部分 */}
      <section className="tools-section">
        <h2 className="section-title">AI工具分类</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/tools/${category.id}`}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
              <div className="category-count">{category.count}+ 工具</div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* 热门工具部分 */}
      <section className="hot-tools">
        <h2 className="section-title">热门工具</h2>
        <div className="hot-tools-grid">
          {hotTools.map((tool) => (
            <Link key={tool.id} to="#" className="hot-tool-card">
              <img src={tool.logo} alt={tool.name} className="hot-tool-logo" />
              <div className="hot-tool-name">{tool.name}</div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* 搜索社区部分 */}
      <section className="search-communities">
        <h2 className="section-title">站内搜索</h2>
        <div className="communities-grid">
          {communities.map((community) => (
            <div key={community.id} className="community-item">
              <div className="community-icon">{community.icon}</div>
              <div className="community-name">{community.name}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 热门教程部分 */}
      <section className="hot-tutorials">
        <div className="section-header">
          <h2 className="section-title">热门AI教程</h2>
          <Link to="/tutorials" className="quick-link">查看更多</Link>
        </div>
        <div className="tutorials-grid">
          {hotTutorials.map((tutorial) => (
            <Link key={tutorial.id} to="#" className="tutorial-card">
              <div className="tutorial-icon">📄</div>
              <h3 className="tutorial-title">{tutorial.title}</h3>
              <p className="tutorial-description">{tutorial.description}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* 快捷入口 */}
      <section className="quick-access-section">
        <h2 className="section-title">快捷入口</h2>
        <div className="quick-access">
          <Link to="/news" className="quick-link">AI快讯</Link>
          <Link to="/projects" className="quick-link">AI项目</Link>
          <Link to="#" className="quick-link">AI百科</Link>
          <Link to="#" className="quick-link">AI交流群</Link>
          <Link to="#" className="quick-link">最新AI项目</Link>
          <Link to="#" className="quick-link">热门AI教程</Link>
        </div>
      </section>
    </div>
  )
}

export default Home