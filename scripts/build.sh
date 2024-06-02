#!/usr/bin/env bash

ROOT_DIR=$(git rev-parse --show-toplevel)
# shellcheck disable=SC2164
cd "$ROOT_DIR"

BUILD=1 yarn docusaurus build
mv build/search-index.json search-index.json
BUILD=0 yarn docusaurus build
mv search-index.json build/search-index.json
