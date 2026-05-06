#!/usr/bin/env bash

set -euo pipefail

# 本專案常用指令入口：本機開發 + Git/GitHub 流程。
# 用法：
#   ./scripts.sh help
#   ./scripts.sh dev
#   ./scripts.sh dev:4321
#   ./scripts.sh build
#   ./scripts.sh preview
#   ./scripts.sh preview:4321
#   ./scripts.sh lint
#   ./scripts.sh lint:fix
#   ./scripts.sh git:status
#   ./scripts.sh git:pull
#   ./scripts.sh git:push
#   ./scripts.sh git:commit "你的提交訊息"
#   ./scripts.sh git:new-branch feature/my-branch
#   ./scripts.sh git:sync-main
#   ./scripts.sh gh:pr-status
#   ./scripts.sh gh:pr-create "標題" "內容"

print_help() {
  cat <<'EOF'
scripts.sh - 本機開發與 GitHub 常用指令

本機開發：
  help                          顯示所有可用指令
  dev                           啟動 Astro 開發伺服器（本專案預設 3000）
  dev:4321                      啟動 Astro 開發伺服器（port 4321）
  build                         建置 production 版本
  preview                       本機預覽 production build（預設 port）
  preview:4321                  本機預覽 production build（port 4321）
  lint                          執行 ESLint 檢查
  lint:fix                      自動修復可修正的 ESLint 問題

Git 基本操作：
  git:status                    查看目前工作樹狀態
  git:pull                      拉取目前分支最新遠端變更
  git:push                      推送目前分支到遠端
  git:add-all                   暫存所有變更（新增/修改/刪除）
  git:commit "<message>"        以訊息提交已暫存變更
  git:new-branch "<name>"       建立並切換到新分支
  git:sync-main                 切回 main 並同步遠端最新內容

GitHub CLI（gh）：
  gh:auth-status                檢查 GitHub CLI 登入狀態
  gh:pr-status                  查看目前 repo/分支的 PR 狀態
  gh:pr-create "<title>" "<body>"
                                由目前分支建立 PR
  gh:repo-view                  顯示目前 repo 資訊
EOF
}

require_gh() {
  # 先檢查 gh 是否安裝，避免後續指令失敗。
  if ! command -v gh >/dev/null 2>&1; then
    echo "錯誤：尚未安裝 GitHub CLI（gh），請先安裝：https://cli.github.com/"
    exit 1
  fi
}

COMMAND="${1:-help}"

case "$COMMAND" in
help)
  # 未提供子指令或指定 help 時，顯示完整說明。
  print_help
  ;;

dev)
  # 使用預設設定啟動本機 Astro 開發伺服器。
  npm run dev
  ;;

dev:4321)
  # 以固定自訂 port 4321 啟動本機開發伺服器。
  npm run dev -- --port 4321
  ;;

build)
  # 建置 production 輸出到 dist/（可部署或本機預覽）。
  npm run build
  ;;

preview)
  # 以預設 preview port 在本機預覽最新 production build。
  npm run preview
  ;;

preview:4321)
  # 在本機以自訂 port 4321 預覽最新 production build。
  npm run preview -- --port 4321
  ;;

lint)
  # 執行 lint 檢查，提早發現程式碼品質與風格問題。
  npm run lint
  ;;

lint:fix)
  # 自動修復 ESLint 可安全修正的問題。
  npm run lint:fix
  ;;

git:status)
  # 快速查看修改、已暫存、未追蹤檔案狀態。
  git status
  ;;

git:pull)
  # 從追蹤的遠端分支拉取最新提交。
  git pull
  ;;

git:push)
  # 將目前分支的本地提交推送到遠端。
  git push
  ;;

git:add-all)
  # 暫存所有變更（新增 + 修改 + 刪除）。
  git add -A
  ;;

git:commit)
  # 將已暫存變更建立提交；需要提供提交訊息。
  if [ $# -lt 2 ]; then
    echo "錯誤：需要提供 commit 訊息"
    echo "用法：./scripts.sh git:commit \"你的提交訊息\""
    exit 1
  fi
  shift
  git commit -m "$*"
  ;;

git:new-branch)
  # 建立並切換到新的功能/修正分支。
  if [ $# -lt 2 ]; then
    echo "錯誤：需要提供分支名稱"
    echo "用法：./scripts.sh git:new-branch feature/my-branch"
    exit 1
  fi
  git checkout -b "$2"
  ;;

git:sync-main)
  # 更新本地 main：切回 main 並拉取 origin/main 最新內容。
  git checkout main && git pull origin main
  ;;

gh:auth-status)
  # 檢查 GitHub CLI 登入狀態，確認可執行後續 gh 指令。
  require_gh
  gh auth status
  ;;

gh:pr-status)
  # 查看目前儲存庫與分支的 PR 狀態。
  require_gh
  gh pr status
  ;;

gh:pr-create)
  # 由目前分支建立 PR；需要標題與內容。
  require_gh
  if [ $# -lt 3 ]; then
    echo "錯誤：需要提供 PR 標題與內容"
    echo "用法：./scripts.sh gh:pr-create \"標題\" \"內容\""
    exit 1
  fi
  gh pr create --title "$2" --body "$3"
  ;;

gh:repo-view)
  # 透過 GitHub CLI 顯示目前儲存庫資訊。
  require_gh
  gh repo view
  ;;

*)
  echo "未知指令：$COMMAND"
  echo
  print_help
  exit 1
  ;;
esac
