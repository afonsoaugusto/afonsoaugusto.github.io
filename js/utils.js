/**
 * Utils - Ferramentas utilitárias para contagem de texto e conversão de horários
 * @version 2.0.0
 * @author Afonso Augusto
 */

'use strict';

/**
 * Configurações globais da aplicação
 */
const CONFIG = {
    TIMEZONE_OFFSET: -3, // GMT-3 (Brasil)
    TIMEZONE_LOCALE: 'pt-BR',
    TIMEZONE_REGION: 'America/Sao_Paulo',
    DEBOUNCE_DELAY: 300
};

/**
 * Classe para gerenciar estatísticas de texto
 */
class TextStatsManager {
    /**
     * @param {Object} elements - Elementos DOM para exibir estatísticas
     */
    constructor(elements) {
        this.elements = elements;
        this.debounceTimer = null;
        this.init();
    }

    /**
     * Inicializa o gerenciador de estatísticas
     */
    init() {
        if (!this.elements.textInput) {
            throw new Error('Elemento textInput não encontrado');
        }
        
        this.bindEvents();
        this.updateStats();
    }

    /**
     * Vincula eventos aos elementos
     */
    bindEvents() {
        this.elements.textInput.addEventListener('input', this.handleInput.bind(this));
    }

    /**
     * Manipula eventos de input com debounce
     * @param {Event} event - Evento de input
     */
    handleInput(event) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.updateStats();
        }, CONFIG.DEBOUNCE_DELAY);
    }

    /**
     * Atualiza todas as estatísticas do texto
     */
    updateStats() {
        const text = this.elements.textInput.value;
        
        try {
            this.updateCharacterCount(text);
            this.updateWordCount(text);
            this.updateLineCount(text);
            this.updateParagraphCount(text);
        } catch (error) {
            console.error('Erro ao atualizar estatísticas:', error);
        }
    }

    /**
     * Atualiza contador de caracteres
     * @param {string} text - Texto para análise
     */
    updateCharacterCount(text) {
        if (this.elements.charCount) {
            this.elements.charCount.textContent = text.length;
        }
    }

    /**
     * Atualiza contador de palavras
     * @param {string} text - Texto para análise
     */
    updateWordCount(text) {
        if (this.elements.wordCount) {
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            this.elements.wordCount.textContent = text.trim() === '' ? 0 : words.length;
        }
    }

    /**
     * Atualiza contador de linhas
     * @param {string} text - Texto para análise
     */
    updateLineCount(text) {
        if (this.elements.lineCount) {
            const lines = text.split('\n').length;
            this.elements.lineCount.textContent = lines;
        }
    }

    /**
     * Atualiza contador de parágrafos
     * @param {string} text - Texto para análise
     */
    updateParagraphCount(text) {
        if (this.elements.paragraphCount) {
            const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0).length;
            this.elements.paragraphCount.textContent = paragraphs;
        }
    }
}

/**
 * Classe para gerenciar conversão de horários
 */
class TimeConverter {
    /**
     * @param {Object} elements - Elementos DOM para conversão de horário
     */
    constructor(elements) {
        this.elements = elements;
        this.init();
    }

    /**
     * Inicializa o conversor de horários
     */
    init() {
        this.validateElements();
        this.bindEvents();
        this.loadCurrentTime();
    }

    /**
     * Valida se todos os elementos necessários existem
     */
    validateElements() {
        const requiredElements = ['utcInput', 'gmt3Input', 'convertBtn', 'nowBtn', 'clearBtn', 'result'];
        
        for (const elementName of requiredElements) {
            if (!this.elements[elementName]) {
                throw new Error(`Elemento ${elementName} não encontrado`);
            }
        }
    }

    /**
     * Vincula eventos aos elementos
     */
    bindEvents() {
        this.elements.convertBtn.addEventListener('click', this.handleConvert.bind(this));
        this.elements.nowBtn.addEventListener('click', this.handleNow.bind(this));
        this.elements.clearBtn.addEventListener('click', this.handleClear.bind(this));
        this.elements.utcInput.addEventListener('change', this.handleUTCChange.bind(this));
        this.elements.gmt3Input.addEventListener('change', this.handleGMT3Change.bind(this));
    }

    /**
     * Formata data para input datetime-local
     * @param {Date} date - Data para formatação
     * @returns {string} Data formatada
     */
    formatDateTimeLocal(date) {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Data inválida fornecida');
        }

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    /**
     * Converte UTC para GMT-3
     * @param {Date} utcDate - Data em UTC
     * @returns {Date} Data em GMT-3
     */
    convertUTCtoGMT3(utcDate) {
        if (!(utcDate instanceof Date) || isNaN(utcDate.getTime())) {
            throw new Error('Data UTC inválida');
        }

        const gmt3Date = new Date(utcDate.getTime() + (CONFIG.TIMEZONE_OFFSET * 60 * 60 * 1000));
        return gmt3Date;
    }

    /**
     * Converte GMT-3 para UTC
     * @param {Date} gmt3Date - Data em GMT-3
     * @returns {Date} Data em UTC
     */
    convertGMT3toUTC(gmt3Date) {
        if (!(gmt3Date instanceof Date) || isNaN(gmt3Date.getTime())) {
            throw new Error('Data GMT-3 inválida');
        }

        const utcDate = new Date(gmt3Date.getTime() - (CONFIG.TIMEZONE_OFFSET * 60 * 60 * 1000));
        return utcDate;
    }

    /**
     * Atualiza o resultado da conversão
     * @param {Date} utc - Data UTC
     * @param {Date} gmt3 - Data GMT-3
     */
    updateResult(utc, gmt3) {
        try {
            const utcFormatted = utc.toISOString().replace('T', ' ').substring(0, 19);
            const gmt3Formatted = gmt3.toLocaleString(CONFIG.TIMEZONE_LOCALE, {
                timeZone: CONFIG.TIMEZONE_REGION
            });

            this.elements.result.innerHTML = `
                <div><strong>UTC:</strong> ${utcFormatted}</div>
                <div><strong>GMT-3:</strong> ${gmt3Formatted}</div>
            `;
        } catch (error) {
            console.error('Erro ao atualizar resultado:', error);
            this.elements.result.innerHTML = '<div class="error">Erro ao formatar resultado</div>';
        }
    }

    /**
     * Manipula conversão manual
     */
    handleConvert() {
        try {
            if (this.elements.utcInput.value) {
                const utcDate = new Date(this.elements.utcInput.value);
                const gmt3Date = this.convertUTCtoGMT3(utcDate);
                this.elements.gmt3Input.value = this.formatDateTimeLocal(gmt3Date);
                this.updateResult(utcDate, gmt3Date);
            } else if (this.elements.gmt3Input.value) {
                const gmt3Date = new Date(this.elements.gmt3Input.value);
                const utcDate = this.convertGMT3toUTC(gmt3Date);
                this.elements.utcInput.value = this.formatDateTimeLocal(utcDate);
                this.updateResult(utcDate, gmt3Date);
            }
        } catch (error) {
            console.error('Erro na conversão:', error);
            this.elements.result.innerHTML = '<div class="error">Erro na conversão de data</div>';
        }
    }

    /**
     * Carrega horário atual
     */
    handleNow() {
        try {
            const now = new Date();
            this.elements.utcInput.value = this.formatDateTimeLocal(now);
            const gmt3Now = this.convertUTCtoGMT3(now);
            this.elements.gmt3Input.value = this.formatDateTimeLocal(gmt3Now);
            this.updateResult(now, gmt3Now);
        } catch (error) {
            console.error('Erro ao carregar horário atual:', error);
        }
    }

    /**
     * Limpa todos os campos
     */
    handleClear() {
        this.elements.utcInput.value = '';
        this.elements.gmt3Input.value = '';
        this.elements.result.innerHTML = '';
    }

    /**
     * Manipula mudança no campo UTC
     */
    handleUTCChange() {
        if (this.elements.utcInput.value) {
            try {
                const utcDate = new Date(this.elements.utcInput.value);
                const gmt3Date = this.convertUTCtoGMT3(utcDate);
                this.elements.gmt3Input.value = this.formatDateTimeLocal(gmt3Date);
                this.updateResult(utcDate, gmt3Date);
            } catch (error) {
                console.error('Erro na conversão UTC:', error);
            }
        }
    }

    /**
     * Manipula mudança no campo GMT-3
     */
    handleGMT3Change() {
        if (this.elements.gmt3Input.value) {
            try {
                const gmt3Date = new Date(this.elements.gmt3Input.value);
                const utcDate = this.convertGMT3toUTC(gmt3Date);
                this.elements.utcInput.value = this.formatDateTimeLocal(utcDate);
                this.updateResult(utcDate, gmt3Date);
            } catch (error) {
                console.error('Erro na conversão GMT-3:', error);
            }
        }
    }

    /**
     * Carrega automaticamente o horário atual
     */
    loadCurrentTime() {
        this.handleNow();
    }
}

/**
 * Classe principal da aplicação
 */
class UtilsApp {
    /**
     * Inicializa a aplicação
     */
    constructor() {
        this.textStatsManager = null;
        this.timeConverter = null;
        this.init();
    }

    /**
     * Inicializa todos os módulos da aplicação
     */
    init() {
        try {
            this.initializeTextStats();
            this.initializeTimeConverter();
        } catch (error) {
            console.error('Erro ao inicializar aplicação:', error);
        }
    }

    /**
     * Inicializa o gerenciador de estatísticas de texto
     */
    initializeTextStats() {
        const textElements = {
            textInput: document.getElementById('textInput'),
            charCount: document.getElementById('charCount'),
            wordCount: document.getElementById('wordCount'),
            lineCount: document.getElementById('lineCount'),
            paragraphCount: document.getElementById('paragraphCount')
        };

        // Verifica se pelo menos o elemento principal existe
        if (textElements.textInput) {
            this.textStatsManager = new TextStatsManager(textElements);
        }
    }

    /**
     * Inicializa o conversor de horários
     */
    initializeTimeConverter() {
        const timeElements = {
            utcInput: document.getElementById('utcInput'),
            gmt3Input: document.getElementById('gmt3Input'),
            convertBtn: document.getElementById('convertBtn'),
            nowBtn: document.getElementById('nowBtn'),
            clearBtn: document.getElementById('clearBtn'),
            result: document.getElementById('result')
        };

        // Verifica se pelo menos os elementos principais existem
        if (timeElements.utcInput && timeElements.gmt3Input) {
            this.timeConverter = new TimeConverter(timeElements);
        }
    }
}

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function() {
    new UtilsApp();
});