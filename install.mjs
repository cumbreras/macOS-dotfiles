#!/usr/bin/env zx

console.log(chalk.blue("Installing brew"));
await $`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;

console.log(chalk.blue("Installing main brew dependencies"));
await $`brew install git`;
await $`brew install zsh zsh-syntax-highlighting`;
await $`brew install htop`;
await $`brew install httpie`;
await $`brew install cask`;
await $`brew install neovim`;
await $`brew install --cask fig`;
await $`brew install tmux`;
await $`brew install fzf`;
await $`brew install ripgrep`;

await $`brew install awscli`;
await $`brew install --cas aws-vault`;
await $`brew install gh`;
await $`brew install act`;

console.log(chalk.blue("Installing main cask dependencies"));
await $`brew install --cask iterm2`;
await $`brew install --cask bitwarden`;
await $`brew install --cask google-drive`;
await $`brew install --cask brave-browser`;
await $`brew install --cask telegram`;
await $`brew install --cask visual-studio-code`;
await $`brew install --cask notion`;
await $`brew install --cask calibre`;
await $`brew install --cask insomnia`;

await $`sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"`;
await $`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | zsh`;
await $`brew install oh-my-posh`;

console.log(chalk.blue("Installing coding dependencies"));
await $`nvm install --lts`;
await $`npm install -g typescript typescript-language-server eslint prettier`;

console.log(chalk.blue("Creating symbiotics for the configuration"));
await $`ln -s zshrc ~/.zshrc`;
await $`ln -s tmux.conf ~/.tmux.conf`;
await $`ln -s nvim ~/.config/nvim`;

console.log(chalk.blue("Installing fonts"));
await $`brew tap homebrew/cask-fonts`;
await $`brew install --cask font-hack-nerd-font`;
