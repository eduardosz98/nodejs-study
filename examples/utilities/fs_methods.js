const fs = require("fs");
const path = require("path");

/**
 * This class contains utils static functions for manipulating
 * the file system
 * @constructor
 */
class FsMethods {
  constructor() {}

  /**
   * Static method for write data into an existant or new file and callback when finished
   * @param {string} filePath The file path where the file is located
   * @param {string} fileName The file name
   * @param {string} fileData The data to write on the file
   * @param {function} callback Callback function when execution is done
   */
  static write = (filePath, fileName, fileData, callback) => {
    fs.writeFile(
      path.join(process.cwd(), "public", filePath, fileName),
      fileData,
      (err) => {
        if (err) throw err;
        callback();
      }
    );
  };

  /**
   * Static method for append data into an file and callback when finished
   * @param {string} filePath The file path where the file is located
   * @param {string} fileName The file name
   * @param {string} fileData The data to write on the file
   * @param {function} callback Callback function when execution is done
   */
  static append = (filePath, fileName, fileData, callback) => {
    fs.appendFile(
      path.join(process.cwd(), "public", filePath, fileName),
      `\n${fileData}`,
      (err) => {
        if (err) throw err;
        callback();
      }
    );
  };

  /**
   * Static async method for reading an file and return it's data
   * @param {string} filePath The file path where the file is located
   * @param {string} fileName The file name
   * @return {string} Returns entire file content as string
   */
  static read = (filePath, fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(process.cwd(), "public", filePath, fileName),
        "utf-8",
        (err, data) => {
          if (err) reject(err);
          resolve(data.toString());
        }
      );
    });
  };

  /**
   * Watch for changes into a specified file passed by params
   * @param {string} filePath
   * @param {string} fileName
   */
  static watch = (filePath, fileName) => {
    fs.watch(
      path.join(process.cwd(), "public", filePath, fileName),
      {
        encoding: "utf-8",
      },
      async (eventType, filename) => {
        if (filename) {
          const response = await this.read(filePath, fileName);
          console.log(`file: ${filename} event: ${eventType}`);
          console.log(`content:`);
          // console.log(response);
        } else {
          console.log("filename not provided");
        }
      }
    );
  };
}

module.exports = FsMethods;
