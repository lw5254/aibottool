import { useState, useEffect } from 'react'

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  
  // 模拟教程数据
  const generateMockTutorials = (count = 12) => {
    const mockTutorials = []
    const categories = ['AI专栏', 'AI问答', 'AI百科', 'AI名人堂']
    
    for (let i = 1; i <= count; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      mockTutorials.push({
        id: `tutorial-${i}`,
        title: `${randomCategory}：深入理解大语言模型的工作原理与应用${i}`,
        description: `本教程详细介绍了${randomCategory}的核心概念、技术原理、应用场景以及未来发展趋势，适合AI爱好者和从业者学习。`,
        category: randomCategory,
        icon: ['📄', '💡', '🔍', '🏆'][Math.floor(Math.random() * 4)]
      })
    }
    
    return mockTutorials
  }
  
  useEffect(() => {
    // 模拟加载数据
    setLoading(true)
    setTimeout(() => {
      const mockTutorials = generateMockTutorials()
      setTutorials(mockTutorials)
      setLoading(false)
    }, 500)
  }, [])
  
  // 处理标签切换
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // 这里可以根据标签筛选教程
  }
  
  return (
    <div className="tutorials-page">
      <div className="page-header">
        <h1>AI教程资源</h1>
        <p>学习AI知识，提升AI技能的最佳平台</p>
      </div>
      
      {/* 标签页 */}
      <div className="tabs">
        <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
          全部教程
        </div>
        <div className={`tab ${activeTab === 'columns' ? 'active' : ''}`} onClick={() => handleTabChange('columns')}>
          AI专栏
        </div>
        <div className={`tab ${activeTab === 'qa' ? 'active' : ''}`} onClick={() => handleTabChange('qa')}>
          AI问答
        </div>
        <div className={`tab ${activeTab === 'encyclopedia' ? 'active' : ''}`} onClick={() => handleTabChange('encyclopedia')}>
          AI百科
        </div>
        <div className={`tab ${activeTab === 'halloffame' ? 'active' : ''}`} onClick={() => handleTabChange('halloffame')}>
          AI名人堂
        </div>
      </div>
      
      {/* 教程列表 */}
      {loading ? (
        <div className="loading">加载中...</div>
      ) : (
        <div className="tutorials-grid">
          {tutorials.map((tutorial) => (
            <a href="#" key={tutorial.id} className="tutorial-card">
              <div className="tutorial-icon">{tutorial.icon}</div>
              <h3 className="tutorial-title">{tutorial.title}</h3>
              <p className="tutorial-description">{tutorial.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tutorials