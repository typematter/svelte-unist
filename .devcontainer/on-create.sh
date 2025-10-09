#!/bin/bash
export HOME="/home/vscode"
export ENV="$HOME/.bashrc"
export SHELL="$(which bash)" 

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

nvm install node

wget -qO- https://get.pnpm.io/install.sh | bash -

export PNPM_HOME="/home/vscode/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
