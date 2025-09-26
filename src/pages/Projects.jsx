import { useState, useEffect } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  
  // 模拟项目数据
  const generateMockProjects = (count = 12) => {
    const mockProjects = []
    const categories = ['AI工具', 'AI项目', '开源框架', '模型库']
    
    for (let i = 1; i <= count; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      mockProjects.push({
        id: `project-${i}`,
        title: `${randomCategory}：基于大语言模型的创新应用${i}`,
        image: `https://picsum.photos/seed/project${i}/800/400`,
        date: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        category: randomCategory
      })
    }
    
    return mockProjects
  }
  
  useEffect(() => {
    // 模拟加载数据
    setLoading(true)
    setTimeout(() => {
      const mockProjects = generateMockProjects()
      setProjects(mockProjects)
      setLoading(false)
    }, 500)
  }, [])
  
  // 处理标签切换
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // 这里可以根据标签筛选项目
  }
  
  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>最新AI项目</h1>
        <p>发现和参与最前沿的AI开源项目</p>
      </div>
      
      {/* 标签页 */}
      <div className="tabs">
        <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
          全部项目
        </div>
        <div className={`tab ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => handleTabChange('tools')}>
          AI工具
        </div>
        <div className={`tab ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleTabChange('projects')}>
          AI项目
        </div>
        <div className={`tab ${activeTab === 'frameworks' ? 'active' : ''}`} onClick={() => handleTabChange('frameworks')}>
          开源框架
        </div>
      </div>
      
      {/* 项目列表 */}
      {loading ? (
        <div className="loading">加载中...</div>
      ) : (
        <div className="projects-grid">
          {projects.map((item) => (
            <a href="#" key={item.id} className="project-card">
              <img src={item.image} alt={item.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{item.title}</h3>
                <div className="project-meta">
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

export default Projects