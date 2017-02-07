# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170207164415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.boolean  "deleted"
    t.integer  "user_id"
    t.integer  "comment_type_id"
    t.integer  "update_id"
    t.integer  "project_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["comment_type_id"], name: "index_comments_on_comment_type_id", using: :btree
    t.index ["project_id"], name: "index_comments_on_project_id", using: :btree
    t.index ["update_id"], name: "index_comments_on_update_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "funding_goal"
    t.string   "video"
    t.string   "image"
    t.boolean  "approved"
    t.boolean  "deleted"
    t.integer  "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["user_id"], name: "index_projects_on_user_id", using: :btree
  end

  create_table "transactions", force: :cascade do |t|
    t.boolean  "refunded"
    t.integer  "user_id"
    t.integer  "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "amount"
    t.index ["project_id"], name: "index_transactions_on_project_id", using: :btree
    t.index ["user_id"], name: "index_transactions_on_user_id", using: :btree
  end

  create_table "updates", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.boolean  "deleted"
    t.integer  "user_id"
    t.integer  "project_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["project_id"], name: "index_updates_on_project_id", using: :btree
    t.index ["user_id"], name: "index_updates_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "salt"
    t.string   "password"
    t.string   "f_name"
    t.string   "l_name"
    t.boolean  "approved"
    t.date     "birth_date"
    t.boolean  "admin"
    t.boolean  "deleted"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  create_table "vote_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "votes", force: :cascade do |t|
    t.binary   "value"
    t.integer  "user_id"
    t.integer  "vote_type_id"
    t.integer  "comment_id"
    t.integer  "project_id"
    t.integer  "update_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["comment_id"], name: "index_votes_on_comment_id", using: :btree
    t.index ["project_id"], name: "index_votes_on_project_id", using: :btree
    t.index ["update_id"], name: "index_votes_on_update_id", using: :btree
    t.index ["user_id"], name: "index_votes_on_user_id", using: :btree
    t.index ["vote_type_id"], name: "index_votes_on_vote_type_id", using: :btree
  end

  add_foreign_key "comments", "comment_types"
  add_foreign_key "comments", "projects"
  add_foreign_key "comments", "updates"
  add_foreign_key "comments", "users"
  add_foreign_key "projects", "users"
  add_foreign_key "transactions", "projects"
  add_foreign_key "transactions", "users"
  add_foreign_key "updates", "projects"
  add_foreign_key "updates", "users"
  add_foreign_key "votes", "comments"
  add_foreign_key "votes", "projects"
  add_foreign_key "votes", "updates"
  add_foreign_key "votes", "users"
  add_foreign_key "votes", "vote_types"
end
