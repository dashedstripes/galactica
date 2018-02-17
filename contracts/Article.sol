pragma solidity ^0.4.4;

contract Article {

  uint256 currentArticleID = 0;
  mapping (uint256 => string) articleIdToContent;

  function getArticleByID(uint256 id) returns (string) {
    return articleIdToContent[id];
  }

  function createArticle(string content) {
    articleIdToContent[currentArticleID] = content;
    currentArticleID++;
  }

  function getCurrentArticleID() constant returns (uint256) {
    return currentArticleID;
  }

}