# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :messages
- has_many :groups
- has_many  :groups,  through:  :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id||integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :groups
- has_many  :groups,  through:  :messages_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname||string||null: false, unique: true|
### Association
- has_many :users
- has_many  :users,  through:  :users_groups
- has_many :messages
- has_many  :messages,  through:  :messages_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
-belong_to :user
-belong_to :group

## messages_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
-belong_to :message
-belong_to :group