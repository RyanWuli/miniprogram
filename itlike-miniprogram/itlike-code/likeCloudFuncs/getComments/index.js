// 云函数入口文件
const cloud = require('wx-server-sdk')

const rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let course_id = event.course_id
  let taid = event.taid

  // https://ke.qq.com/cgi-bin/comment_new/course_comment_list?cid=69700&count=10&page=0&filter_rating=0&bkn=&r=0.007610938878351625
  // referer: https://ke.qq.com/course/69700?taid=1668328506593348

  var options = {
    uri: 'https://ke.qq.com/cgi-bin/comment_new/course_comment_list',
    qs: {
      // access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
      count: 10,
      page: 0,
      cid: course_id
    },
    headers: {
      'referer': `https://ke.qq.com/course/${course_id}?taid=${taid}`
    },
    json: true // Automatically parses the JSON string in the response
  };

  let result = await rp(options)
    .then( function (repos) {
      // console.log('User has %d repos', repos.length);
      return repos
    })
    .catch( function (err) {
      // API call failed...
      console.error(err)
    });
  return result
}