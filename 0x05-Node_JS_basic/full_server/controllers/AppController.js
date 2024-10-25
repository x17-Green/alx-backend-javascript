/**
 * Contains the miscellaneous route handlers.
 * @author Marksman Green <https://github.com/x17-Green>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
