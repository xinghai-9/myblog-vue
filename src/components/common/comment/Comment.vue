<!--评论模块-->
<template>
  <el-card>
    <div class="container">
      <div class="comment" v-for="(item, index) in comments">
        <div class="info">
          <img
            class="avatar"
            :src="item.fromUser.avatar"
            width="36"
            height="36"
          />
          <div class="right">
            <div class="name">{{ item.fromUser.username }}</div>
            <div class="date">{{ item.commentDate }}</div>
          </div>
        </div>
        <div class="content">{{ item.content }}</div>
        <div class="control">
          <span
            class="like"
            :class="{ active: item.isLike }"
            @click="likeClick(item)"
          >
            <i class="el-icon-user"></i>
            <span class="like-num">{{
              item.likeNum > 0 ? item.likeNum + "人赞" : "赞"
            }}</span>
          </span>
          <span
            class="comment-reply"
            @click="showCommentInput(item.id, item.fromUser.username)"
          >
            <i class="el-icon-chat-dot-round"></i>
            <span>回复</span>
          </span>
        </div>
        <div class="reply">
          <div class="item" v-for="reply in item.replyList">
            <div class="reply-content">
              <span class="from-name">{{ reply.fromUserName }}</span
              ><span>: </span>
              <span class="to-name">@{{ reply.toUserName }}</span>
              <span>{{ reply.content }}</span>
            </div>
            <div class="reply-bottom">
              <span>{{ reply.replyDate }}</span>
              <span
                class="reply-text"
                @click="showCommentInput(item.id, reply.fromUserName, reply)"
              >
                <i class="el-icon-chat-dot-round"></i>
                <span>回复</span>
              </span>
            </div>
          </div>
          <transition name="fade">
            <div class="input-wrapper" v-if="showItemId === item.id">
              <el-input
                class="gray-bg-input"
                v-model="inputCommentReply"
                type="textarea"
                :rows="3"
                autofocus
                placeholder="写下你的评论"
              >
              </el-input>
              <div class="btn-control">
                <span class="cancel" @click="cancel">取消</span>
                <el-button
                  class="btn"
                  type="success"
                  round
                  @click="commitReply(item, index)"
                  >确定</el-button
                >
              </div>
            </div>
          </transition>
        </div>
      </div>
      <br />
      <transition name="fade">
        <div class="input-wrapper" v-if="showItemId === '-1'">
          <el-input
            class="gray-bg-input"
            v-model="inputComment"
            type="textarea"
            :rows="3"
            placeholder="写下你的评论"
          >
          </el-input>
          <div class="btn-control">
            <span class="cancel" @click="cancel">取消</span>
            <el-button class="btn" type="success" round @click="commitComment()"
              >确定</el-button
            >
          </div>
        </div>
      </transition>
      <div
        class="write-reply"
        @click="showCommentInput('-1')"
        v-if="showItemId !== '-1'"
      >
        <i class="el-icon-edit"></i>
        <span class="add-comment">添加新评论</span>
      </div>
    </div>
  </el-card>
</template>

<script>
import Vue from "vue";
import {
  getCommentData,
  updateCommentData,
  setCommentData,
  setReplyData
} from "network/comment";
import { getUserById } from "network/user";
import { parseTime } from "common/utils";

export default {
  created() {
    this.getCommentData();
  },
  data() {
    return {
      inputComment: null,
      inputCommentReply: null,
      showItemId: null,
      currentReply: {},
      comments: []
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    getCurrentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    /**
     * 获取评论数据
     */
    getCommentData() {
      getCommentData(this.$route.params.id).then(res => {
        this.comments = res;
      });
    },

    /**
     * 点赞
     */
    likeClick(item) {
      if (item.isLike === null) {
        Vue.$set(item, "isLike", true);
        item.likeNum++;
      } else {
        if (item.isLike) {
          item.likeNum--;
        } else {
          item.likeNum++;
        }
        item.isLike = !item.isLike;
      }

      this.commitComment(item);
    },

    /**
     * 点击取消按钮
     */
    cancel() {
      this.showItemId = "";
      this.inputComment = "";
      this.inputCommentReply = "";
      this.currentReply = {};
    },

    /**
     * 提交评论
     */
    commitComment(item) {
      if (item) {
        updateCommentData(item).then(res => {});
      } else {
        let content = this.inputComment;
        let commentDate = parseTime(new Date(), "{y}-{m}-{d} {h}:{i}:{s}");
        let blogId = this.$route.params.id;

        let comment = {
          blogId: blogId,
          fromUserId: this.getCurrentUser.id,
          content: content
        };

        setCommentData(comment).then(res => {
          this.comments.push({
            id: res,
            commentDate: commentDate,
            blogId: blogId,
            fromUserId: this.getCurrentUser.id,
            fromUser: this.getCurrentUser,
            likeNum: 0,
            content: content,
            replyList: []
          });
        });

      }

      this.cancel();
    },

    commitReply(item, index) {
      let start = this.inputCommentReply.indexOf(" ") + 1;
      let content = this.inputCommentReply.substring(start);
      let myDate = parseTime(new Date(), "{y}-{m}-{d} {h}:{i}:{s}");

      let reply = {
        commentId: item.id,
        fromUserName: this.getCurrentUser.username,
        toUserName: this.currentReply.fromUserName || item.fromUser.username,
        content: content,
        replyDate: myDate
      };

      setReplyData(reply).then(res => {
        this.comments[index].replyList.push(reply);
      });

      this.cancel();
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(itemId, fromName, reply) {
      this.cancel();
      if (fromName) {
        this.inputCommentReply = "@" + fromName + " ";
      }
      this.showItemId = itemId;

      if (reply) this.currentReply = reply;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../../public/scss/index";

.container {
  padding: 0 10px;
  box-sizing: border-box;

  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid $border-fourth;

    .info {
      display: flex;
      align-items: center;

      .avatar {
        border-radius: 50%;
      }

      .right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        .name {
          font-size: 16px;
          color: $text-main;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .date {
          font-size: 12px;
          color: $text-minor;
        }
      }
    }

    .content {
      font-size: 16px;
      color: $text-main;
      line-height: 20px;
      padding: 10px 0;
    }

    .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $text-minor;

      .like {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;

        &.active,
        &:hover {
          color: $color-main;
        }

        .iconfont {
          font-size: 14px;
          margin-right: 5px;
        }
      }

      .comment-reply {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          color: $text-333;
        }

        .iconfont {
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }

    .reply {
      margin: 10px 0;
      border-left: 2px solid $border-first;

      .item {
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px dashed $border-third;

        .reply-content {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: $text-main;

          .from-name {
            color: $color-main;
          }

          .to-name {
            color: $color-main;
            margin-left: 5px;
            margin-right: 5px;
          }
        }

        .reply-bottom {
          display: flex;
          align-items: center;
          margin-top: 6px;
          font-size: 12px;
          color: $text-minor;

          .reply-text {
            display: flex;
            align-items: center;
            margin-left: 10px;
            cursor: pointer;

            &:hover {
              color: $text-333;
            }

            .icon-comment {
              margin-right: 5px;
            }
          }
        }
      }

      .write-reply {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: $text-minor;
        padding: 10px;
        cursor: pointer;

        &:hover {
          color: $text-main;
        }

        .el-icon-edit {
          margin-right: 5px;
        }
      }

      .fade-enter-active,
      fade-leave-active {
        transition: opacity 0.5s;
      }

      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }

      .input-wrapper {
        padding: 10px;

        .gray-bg-input,
        .el-input__inner {
          /*background-color: #67C23A;*/
        }

        .btn-control {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 10px;

          .cancel {
            font-size: 16px;
            color: $text-normal;
            margin-right: 20px;
            cursor: pointer;

            &:hover {
              color: $text-333;
            }
          }

          .confirm {
            font-size: 16px;
          }
        }
      }
    }
  }
}

.write-reply {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: $text-minor;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: $text-main;
  }

  .el-icon-edit {
    margin-right: 5px;
  }
}

.fade-enter-active,
fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.input-wrapper {
  padding: 10px;

  .gray-bg-input,
  .el-input__inner {
    /*background-color: #67C23A;*/
  }

  .btn-control {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;

    .cancel {
      font-size: 16px;
      color: $text-normal;
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        color: $text-333;
      }
    }

    .confirm {
      font-size: 16px;
    }
  }
}
</style>
