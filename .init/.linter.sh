#!/bin/bash
cd /home/kavia/workspace/code-generation/creative-portfolio-showcase-224117-224126/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

