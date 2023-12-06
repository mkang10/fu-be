import userRoutes from "./user.route.js";
import blogRoutes from "./blog.route.js";
import authRoutes from "./auth.route.js";
import commentsRoutes from "./comments.route.js";
import likesRoutes from "./likes.route.js";
import moderatorRoutes from "./moderator.route.js";
import notificationRoute from "./notification.route.js";
import awardRoute from "./award.route.js";




const initRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/comments", commentsRoutes);
  app.use("/api/likes", likesRoutes);
  app.use("/api/blogs", blogRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/moderator", moderatorRoutes);
  app.use("/api/notification", notificationRoute);
  app.use("/api/award", awardRoute);
};

export default initRoutes;

