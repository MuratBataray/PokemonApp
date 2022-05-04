export const state = () => ({
    pokemons: {},
    favoritePokemons: [],
    pokemon: {
        "abilities": [{
                "ability": {
                    "name": "overgrow",
                    "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
            },
            {
                "ability": {
                    "name": "chlorophyll",
                    "url": "https://pokeapi.co/api/v2/ability/34/"
                },
                "is_hidden": true,
                "slot": 3
            }
        ],
        "height": 7,
        "id": 1,
        "moves": [{
                "move": {
                    "name": "tackle",
                },
                "version_group_details": [{
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
            {
                "move": {
                    "name": "growl",
                },
                "version_group_details": [{
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
            {
                "move": {
                    "name": "leech-seed",
                },
                "version_group_details": [{
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
            {
                "move": {
                    "name": "vine-whip",
                },
                "version_group_details": [{
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
        ],
        "name": "bulbasaur",
        "order": 1,
        "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
            "front_shiny_female": null,
            "other": {
                "dream_world": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                    "front_female": null
                },
                "home": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                    "front_shiny_female": null
                },
                "official-artwork": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                }
            },
            "versions": {
                "generation-i": {
                    "red-blue": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
                        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
                        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png"
                    },
                    "yellow": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
                        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
                        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png"
                    }
                },
                "generation-ii": {
                    "crystal": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
                        "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/1.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png",
                        "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png"
                    },
                    "gold": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/1.png"
                    },
                    "silver": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/1.png"
                    }
                },
                "generation-iii": {
                    "emerald": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png"
                    },
                    "firered-leafgreen": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png"
                    },
                    "ruby-sapphire": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png"
                    }
                },
                "generation-iv": {
                    "diamond-pearl": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "heartgold-soulsilver": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "platinum": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-v": {
                    "black-white": {
                        "animated": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
                            "front_shiny_female": null
                        },
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-vi": {
                    "omegaruby-alphasapphire": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "x-y": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-vii": {
                    "icons": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
                        "front_female": null
                    },
                    "ultra-sun-ultra-moon": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-viii": {
                    "icons": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
                        "front_female": null
                    }
                }
            }
        },
        "stats": [{
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        "types": [{
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "weight": 69,
        "species": {
            "evolution_chain": {
                "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
            },
            "flavor_text_entries": [{
                "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
                "language": {
                    "name": "en",
                    "url": "https://pokeapi.co/api/v2/language/9/"
                },
                "version": {
                    "name": "red",
                    "url": "https://pokeapi.co/api/v2/version/1/"
                }
            }, ],
            "id": 1,
            "name": "bulbasaur",
        },
        "evolutions": {
            "chain": {
                "evolution_details": [],
                "evolves_to": [{
                    "evolves_to": [{
                        "species": {
                            "name": "venusaur",
                            "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
                        }
                    }],
                    "species": {
                        "name": "ivysaur",
                        "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
                    }
                }],
                "species": {
                    "name": "bulbasaur",
                    "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
                }
            },
            "id": 1
        }
    },
    team: [],
    pokemonEvos: [],
    selectedPokemon: {
        "abilities": [{
                "ability": {
                    "name": "overgrow",
                    "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
            },
            {
                "ability": {
                    "name": "chlorophyll",
                    "url": "https://pokeapi.co/api/v2/ability/34/"
                },
                "is_hidden": true,
                "slot": 3
            }
        ],
        "height": 7,
        "id": 1,
        "moves": [{
                "move": {
                    "name": "tackle",
                },
                "version_group_details": [{
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
            {
                "move": {
                    "name": "growl",
                },
                "version_group_details": [{
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
            {
                "move": {
                    "name": "leech-seed",
                },
                "version_group_details": [{
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
            {
                "move": {
                    "name": "vine-whip",
                },
                "version_group_details": [{
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                    },
                    "version_group": {
                        "name": "red-blue",
                    }
                }, ]
            },
        ],
        "name": "bulbasaur",
        "order": 1,
        "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
            "front_shiny_female": null,
            "other": {
                "dream_world": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                    "front_female": null
                },
                "home": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                    "front_shiny_female": null
                },
                "official-artwork": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                }
            },
            "versions": {
                "generation-i": {
                    "red-blue": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
                        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
                        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png"
                    },
                    "yellow": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
                        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
                        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png"
                    }
                },
                "generation-ii": {
                    "crystal": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
                        "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/1.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png",
                        "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png"
                    },
                    "gold": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/1.png"
                    },
                    "silver": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/1.png"
                    }
                },
                "generation-iii": {
                    "emerald": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png"
                    },
                    "firered-leafgreen": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png"
                    },
                    "ruby-sapphire": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png"
                    }
                },
                "generation-iv": {
                    "diamond-pearl": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "heartgold-soulsilver": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "platinum": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-v": {
                    "black-white": {
                        "animated": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
                            "front_shiny_female": null
                        },
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-vi": {
                    "omegaruby-alphasapphire": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "x-y": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-vii": {
                    "icons": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
                        "front_female": null
                    },
                    "ultra-sun-ultra-moon": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
                        "front_shiny_female": null
                    }
                },
                "generation-viii": {
                    "icons": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
                        "front_female": null
                    }
                }
            }
        },
        "stats": [{
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        "types": [{
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "weight": 69,
        "species": {
            "evolution_chain": {
                "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
            },
            "flavor_text_entries": [{
                "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
                "language": {
                    "name": "en",
                    "url": "https://pokeapi.co/api/v2/language/9/"
                },
                "version": {
                    "name": "red",
                    "url": "https://pokeapi.co/api/v2/version/1/"
                }
            }, ],
            "id": 1,
            "name": "bulbasaur",
        },
        "evolutions": [{ "id": 1, "name": "bulbasaur", "sprites": { "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }, "types": [{ "slot": 1, "type": { "name": "grass" } }, { "slot": 2, "type": { "name": "poison" } }] }, { "id": 2, "name": "ivysaur", "sprites": { "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" }, "types": [{ "slot": 1, "type": { "name": "grass" } }, { "slot": 2, "type": { "name": "poison" } }] }, { "id": 3, "name": "venusaur", "sprites": { "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }, "types": [{ "slot": 1, "type": { "name": "grass" } }, { "slot": 2, "type": { "name": "poison" } }] }]
    },
    inFavorite: false,
    favoriteCount: 0,
    teamCount: 0
})
export const mutations = {
    initPokemon(state, allPokemon) {
        state.pokemons = allPokemon
    },
    addToFavorite(state, pokemon) {
        state.favoritePokemons.push(pokemon)
    },
    removeFromFavorite(state, pokemon) {
        state.favoritePokemons = state.favoritePokemons.filter(function(item) {
            return item !== pokemon
        })
    },
    initPokemonDetail(state, pokemon) {
        state.pokemon = pokemon
    },
    selectPokemon(state, pokemon) {
        state.selectedPokemon = pokemon
    },
    addToTeam(state, pokemon) {
        state.team.push(pokemon)
    },
    removeFromTeam(state, pokemon) {
        state.team = state.team.filter(function(item) {
            return item.name !== pokemon.name
        })
    },
    inFavorite(state, bool) {
        state.inFavorite = bool
    },
    favoriteCount(state, count) {
        state.favoriteCount = count
    },
    teamCount(state, count) {
        state.teamCount = count
    },
    addDetails(state, pokemons) {
        state.pokemonEvos = pokemons
    },

}
export const actions = {
    async getAllPokemon({ commit }) {
        const data = await this.$axios.$get('https://stoplight.io/mocks/appwise-be/pokemon/32428517/pokemon')
        commit('initPokemon', data)
    },
    selectPokemon({ commit }, pokemon) {
        commit('selectPokemon', pokemon)
    },
    inFavorite({ commit }, bool) {
        commit('inFavorite', bool)
    },
    async getDetails({ commit, state }, id) {
        let data = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/' + id)
        const species = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon-species/' + id)
        let evolutions = await this.$axios.$get(species.evolution_chain['url'])
        data['evolutions'] = []
        data['evolutions'].push(state.pokemons.filter(e => e.name === evolutions.chain.species.name)[0])
        if (evolutions.chain.evolves_to.length > 0) {
            for (let index = 0; index < evolutions.chain.evolves_to.length; index++) {
                let evo = evolutions.chain.evolves_to[index]
                if (state.pokemons.filter(e => e.name === evo.species.name).length > 0) {
                    data['evolutions'].push(state.pokemons.filter(e => e.name === evo.species.name)[0])
                }
            }
            if (evolutions.chain.evolves_to[0].evolves_to.length > 0) {
                for (let index = 0; index < evolutions.chain.evolves_to[0].evolves_to.length; index++) {
                    let evo = evolutions.chain.evolves_to[0].evolves_to[index]
                    if (state.pokemons.filter(e => e.name === evo.species.name).length > 0) {
                        data['evolutions'].push(state.pokemons.filter(e => e.name === evo.species.name)[0])
                    }
                }
            }
        }
        data['species'] = species
        commit('initPokemonDetail', data)
    },
    async getDetailsOfSpecificUrls({ commit }, urls) {
        let data = []
        for (let index = 0; index < urls.length; index++) {
            data.push(await this.$axios.$get(urls[index]))
        }
        commit('addDetails', data)
    },
    addPokemonToTeam({ commit }, pokemon) {
        commit('addToTeam', pokemon)
    },
    removePokemonFromTeam({ commit }, pokemon) {
        commit('removeFromTeam', pokemon)
    },
    addPokemonToFavs({ commit }, pokemon) {
        commit('addToFavorite', pokemon)
    },
    removePokemonFromFavs({ commit }, pokemon) {
        commit('removeFromFavorite', pokemon)
    },
    favoriteCount({ commit }, count) {
        commit('favoriteCount', count)
    },
    teamCount({ commit }, count) {
        commit('teamCount', count)
    }
}