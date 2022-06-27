require('dotenv').config();
const { Op } = require('sequelize');
const {
  success, CREATED, BAD_REQUEST, SERVER_ERROR, customError,
} = require('request-response-handler');
const models = require('../database/models');

/**
 * Handles streams
 *
 * @class StreamController
 */
class StreamController {
  /**
   * Check Stream
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {*}
   * @memberof StreamController
   */
   static async CheckStreams(req, res, next) {
    try {
        // TODO get payload
      const videoStream = req.payload;
console.log(videoStream, '<<==videoStream')
      let current_time = new Date(Date.now()).getTime();

      // TODO get active videoStreams by userId
      const ModelConfig = {
        where: {
          userId: videoStream.userId,
          status: 'ACTIVE',
          duration: {
            [Op.lte]: current_time,
          },
        }
      }

      const getVideoStreams = await models.UserStreams.findAndCountAll(ModelConfig);

      // TODO add new stream and check that user has not reached max stream of 3
      const currentStreams = getVideoStreams.count + 1;
      if(currentStreams > 3) {
        return next(customError({
          status: BAD_REQUEST,
          message: 'You have exceeded video streaming sessions',
        }));
      }

      // TODO add stream to database if max sessions not reached
      const videoStreamLog = { 
        userId: videoStream.userId, videoId: videoStream.videoId, duration: videoStream.duration }
      const newStream = await models.UserStreams.create(videoStreamLog);
      
      return success(res, CREATED, 'video Started Successfully', newStream);
    } catch (error) {
      return next(
        customError({
          status: SERVER_ERROR,
          message: `Try again something went wrong ${error}`,
        }),
      );
    }
  }
}

module.exports = StreamController;
