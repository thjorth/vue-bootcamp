const Client = require('mongodb');

const URI = `mongodb://appuser:Abcd12345@cluster0-shard-00-00-pdpfz.mongodb.net:27017,cluster0-shard-00-01-pdpfz.mongodb.net:27017,cluster0-shard-00-02-pdpfz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
const DB = 'ymdb';
const RATINGS_COLLECTION = 'ratings';

function testConnection() {
    Client.connect(URI, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        db.close();
      });
}

function calcMeanRate(ratings) {
    if (!ratings) {
        return 0;
    }
    let r = 0, c = 0;
    c += ratings.r0;
    
    c += ratings.r1;
    r += ratings.r1;

    c += ratings.r2;
    r += ratings.r2 * 2;

    c += ratings.r3;
    r += ratings.r3 * 3;

    c += ratings.r4;
    r += ratings.r4 * 4;

    c += ratings.r5;
    r += ratings.r5 * 5;

    c += ratings.r6;
    r += ratings.r6 * 6;

    c += ratings.r7;
    r += ratings.r7 * 7;

    c += ratings.r8;
    r += ratings.r8 * 8;

    c += ratings.r9;
    r += ratings.r9 * 9;

    c += ratings.r10;
    r += ratings.r10 * 10;

    return r / c;
}

async function getRatings(id) {
    const promise = new Promise((resolve, reject) => {
        Client.connect(URI, {useNewUrlParser: true}, function(err, db) {
            if (err) {
                reject(err);
            }
            else {
                const dbo = db.db(DB);
                dbo.collection(RATINGS_COLLECTION).findOne({ id: id }, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        if (result) {
                            result.rating = calcMeanRate(result);
                        }
                        resolve(result);
                    }
                });
            }
        });
    });
    return promise;
}

function getNewRatingsObj(id) {
    return {
        id: id,
        r0: 0,
        r1: 0,
        r2: 0,
        r3: 0,
        r4: 0,
        r5: 0,
        r6: 0,
        r7: 0,
        r8: 0,
        r9: 0,
        r10: 0,
    };
}

async function putRating(id, rating) {
    const promise = new Promise(async (resolve, reject) => {
        const ratings = await getRatings(id) || getNewRatingsObj(id);
        switch (rating) {
            case 0:
                ratings.r0 += 1;
                break;
            case 1:
                ratings.r1 += 1;
                break;
            case 2:
                ratings.r2 += 1;
                break;
            case 3:
                ratings.r3 += 1;
                break;
            case 4:
                ratings.r4 += 1;
                break;
            case 5:
                ratings.r5 += 1;
                break;
                case 6:
                ratings.r6 += 1;
                break;
            case 7:
                ratings.r7 += 1;
                break;
            case 8:
                ratings.r8 += 1;
                break;
            case 9:
                ratings.r9 += 1;
                break;
            case 10:
                ratings.r10 += 1;
                break;
        }

        Client.connect(URI, {useNewUrlParser: true}, function(err, db) {
            if (err) {
                reject(err);
            }
            else {
                const dbo = db.db(DB);
                dbo.collection(RATINGS_COLLECTION).save(ratings, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
    
            }
        });
    });
    return promise;
}

module.exports = {
    testConnection,
    getRatings,
    putRating,

};
