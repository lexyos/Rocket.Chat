#!/bin/bash

export \
    SKIP_MONGODEPRECATION_CHECK=true \
    SKIP_MONGODEPRECATION_BANNER=true \
    NODE_ENV=production \
    PORT=3000 \
    ROOT_URL=http://localhost:3000 \
    MONGO_URL=mongodb://localhost:27017/rocketchat \
    MONGO_OPLOG_URL=mongodb://localhost:27017/local

meteor
