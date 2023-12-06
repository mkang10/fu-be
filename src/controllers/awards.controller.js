import { db } from "../database/connect.js";

  const getTop10LikeOfUser = (req, res) => {
    const query = `SELECT 
    u.user_id,
    CONCAT(u.first_name, ' ', u.last_name) AS full_name,
    u.image,
    SUM(bl.like_count) AS total_likes
FROM (
    SELECT user_id, blog_id, COUNT(*) AS like_count
    FROM blog_like
    WHERE user_id IS NOT NULL AND blog_id IS NOT NULL
    GROUP BY user_id, blog_id
) AS bl
JOIN user u ON bl.user_id = u.user_id
GROUP BY u.user_id, full_name, u.image
ORDER BY total_likes DESC
LIMIT 10;
`;
  
    db.query(query, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
  
      return res.status(200).json(data);
    });
  };

  const getTop10CmtOfUser = (req, res) => {
    const query = ` SELECT user_id, SUM(comment_count) AS total_comment
    FROM (
        SELECT user_id, blog_id, COUNT(*) AS comment_count
        FROM comment
        WHERE user_id IS NOT NULL AND blog_id IS NOT NULL
        GROUP BY user_id, blog_id
    ) AS user_comment_counts
    GROUP BY user_id
    ORDER BY total_comment DESC
    LIMIT 10;`;
  
    db.query(query, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
  
      return res.status(200).json(data);
    });
  };
  
  const getAwardModerator = (req, res) => {
    const query = `
    SELECT CONCAT(u.last_name, ' ', u.first_name) AS full_name, COUNT(b.status) AS total_Like, u.image AS avatar
  FROM user u
  LEFT JOIN blog b ON u.user_id = b.user_id
  WHERE b.status = 1 OR b.status = 0
  GROUP BY u.user_id, u.last_name, u.first_name, u.image
  ORDER BY total_Like DESC
  LIMIT 2;`
    db.query(query, (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(200).json(result);
  
    })
  };
// second minute hours day week month
// const job = new cron.schedule(
//   "*/15 * * * * *",
//   () => {
//     console.log("//////........");
//   },
//   false,
//   "Asia/Ho_Chi_Minh",
// );

// job.start();


// setTimeout( () => {
//   // console.log("............");
//   getAwarMorderater();
//   console.log(getAwarMorderater, "ioinda................");
// }, 60 * 1000);

  export default {
    getTop10LikeOfUser ,
    getTop10CmtOfUser,
    getAwardModerator,
  };