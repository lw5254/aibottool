import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ToolCategory = () => {
  const { category } = useParams()
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  
  // 分类名称映射
  const categoryNames = {
    'ai-writing': 'AI写作工具',
    'ai-image': 'AI图像工具',
    'ai-video': 'AI视频工具',
    'ai-office': 'AI办公工具',
    'ai-agent': 'AI智能体',
    'ai-chat': 'AI聊天助手',
    'ai-coding': 'AI编程工具',
    'ai-design': 'AI设计工具',
    'ai-audio': 'AI音频工具',
    'ai-search': 'AI搜索引擎',
    'ai-platform': 'AI开发平台',
    'ai-learning': 'AI学习网站',
    'ai-model': 'AI训练模型',
    'ai-detection': 'AI内容检测'
  }
  
  // 模拟工具数据
  const generateMockTools = (category, count = 20) => {
    const mockTools = []
    const baseId = categoryNames[category] || 'AI工具'
    
    for (let i = 1; i <= count; i++) {
      mockTools.push({
        id: `${category}-${i}`,
        name: `${baseId} ${i}`,
        description: `这是一个强大的${baseId}，可以帮助用户快速完成相关任务，提高工作效率。`,
        logo: `https://picsum.photos/seed/${category}${i}/100`,
        tags: ['热门', '免费', '实用'][Math.floor(Math.random() * 3)]
      })
    }
    
    return mockTools
  }
  
  useEffect(() => {
    // 模拟加载数据
    setLoading(true)
    setTimeout(() => {
      const mockTools = generateMockTools(category)
      setTools(mockTools)
      setLoading(false)
    }, 500)
  }, [category])
  
  // 处理标签切换
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // 这里可以根据标签筛选工具
  }
  
  return (
    <div className="tool-category-page">
      <div className="category-header">
        <h1>{categoryNames[category] || 'AI工具'}</h1>
        <p>发现和使用最好的{categoryNames[category] || 'AI工具'}</p>
      </div>
      
      {/* 标签页 */}
      <div className="tabs">
        <div className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
          全部工具
        </div>
        <div className={`tab ${activeTab === 'hot' ? 'active' : ''}`} onClick={() => handleTabChange('hot')}>
          热门推荐
        </div>
        <div className={`tab ${activeTab === 'free' ? 'active' : ''}`} onClick={() => handleTabChange('free')}>
          免费工具
        </div>
        <div className={`tab ${activeTab === 'new' ? 'active' : ''}`} onClick={() => handleTabChange('new')}>
          最新上线
        </div>
      </div>
      
      {/* 工具列表 */}
      {loading ? (
        <div className="loading">加载中...</div>
      ) : (
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <div className="tool-header">
                <img src={tool.logo} alt={tool.name} className="tool-logo" />
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                </div>
              </div>
              <p className="tool-description">{tool.description}</p>
              <div className="tool-tags">
                <span className="tool-tag">{tool.tags}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ToolCategory