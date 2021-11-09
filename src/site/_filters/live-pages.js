/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Filter eleventy collection of posts that should not be in algolia.
 */

const {livePosts} = require('./live-posts');

/**
 * @param {EleventyCollectionItem[]} posts An array of eleventy post object.
 * @return {EleventyCollectionItem[]} The posts that should go be shown.
 */
function livePages(posts) {
  return posts.filter(
    (post) =>
      livePosts(post) &&
      post.url &&
      post.data.title &&
      !post.data.disable_algolia &&
      !post.data.noindex,
  );
}

module.exports = {livePages};
