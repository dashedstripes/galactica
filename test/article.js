const Article = artifacts.require('Article');

contract('Article', () => {

  it('should get an article by ID', () => {
    return Article.deployed()
      .then((instance) => instance.getArticleByID.call(0))
      .then((article) => assert.equal(article, ''))
  })

  it('should create an article', () => {
    return Article.deployed()
      .then((instance) => instance.createArticle('Hello World.'))
      .then(() => Article.deployed())
      .then((instance) => {
        return instance.getArticleByID.call(0)
      })
      .then((article) => {
        assert.equal(article, 'Hello World.')
      })
  })

  it('should increase current article id once an article is created', () => {
    return Article.deployed()
      .then((instance) => instance.createArticle('Hello World.'))
      .then(() => Article.deployed())
      .then((instance) => {
        return instance.getCurrentArticleID.call()
      })
      .then((id) => {
        assert.equal(id.toNumber(), 2)
      })
  })

});