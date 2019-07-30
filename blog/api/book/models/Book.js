'use strict';

/**
 * Lifecycle callbacks for the `Book` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  beforeSave: async (model) => {
    const lastBook = await Book.find({})
    .sort({_id: 'desc'})
    .limit(1)
    .exec();
    const numStr = lastBook[0].name.substring(lastBook[0].name.indexOf('k') + 1);
    let num = parseInt(numStr) + 1;
    model.name = lastBook[0].name.replace(numStr, num.toString());
  },

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
