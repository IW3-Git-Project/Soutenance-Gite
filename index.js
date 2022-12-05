{
    "name": "sfakinedo_moderation",
    "steps": {
        "step_proof_receipt": {
            "type": "moderate_participation",
            "options": {
                "title": "Ticket de caisse",
                "display_title": false,
                "moderation_context": {
                    "items": {
                        "media": {
                            "data": [
                                "{{ '{{ session.participation.rawData[\'purchase-1_proof-1\']|json_encode }}' }}",
                                "{{ '{{ session.participation.rawData[\'purchase-1_proof-2\']|json_encode }}' }}"
                            ]
                        }
                    }
                },
                "@builder": {
                    "worker": "extra_form_builder",
                    "parameters": {
                        "configuration": {
                            "html_proof": {
                                "extra_form_type": "html",
                                "options": {
                                    "content": "<p> BDC : </p>"
                                }
                            },
                            "extra_evidence": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Manque plusieurs éléments su fre et BDC ",
                                    "required": false,
                                    "help": "Manque plusieurs éléments sur preuve d'achat"
                                }
                            },
                            "is_expected_document": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Est-ce le document attendu ?",
                                    "required": false,
                                    "help": "Ticket de caisse ou Facture"
                                }
                            },
                            "is_readable_document": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Le document est-il lisible ?",
                                    "required": false
                                }
                            },
                            "is_product": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Est-ce le bon produit  ?",
                                    "required": false,
                                    "help": "Manque ou mauvais produit sur preuve d'achat"
                                }
                            },
                            "purchase_product": {
                                "extra_form_type": "choice",
                                "options": {
                                    "label": "Choix de produit",
                                    "choices": {
                                        "---": "none",
                                        "Silence & Air": "Silence & Air",
                                        "Oxygen Pool Air": "Oxygen Pool Air",
                                        "Mix Color": "Mix Color",
                                        "Vitalité": "Vitalité",
                                        "Sensation Air Pool": "Sensation Air Pool",
                                        "Kineplus": "Kineplus",
                                        "Kineplus Kietude": "Kineplus Kietude"
                                    },
                                    "placeholder": "---"
                                }
                            },
                            "are_all_elements_present": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Tous les éléments sont-ils présents ?",
                                    "required": false,
                                    "help": "Date et l'heure d'achat, enseigne, montant TTC, désignation produit."
                                }
                            },
                            "date_achat": {
                                "extra_form_type": "html",
                                "options": {
                                    "content": "<p><br><br>Date sur Ticket de caisse saisie par le conso: {{ '{{ session.participation.rawData[\'purchase-1_date\']|date(\'d\/m\/y\') }}' }}<br></p>"
                                }
                            },
                            "control_isExpectedResult1": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Est-ce la bonne date ?",
                                    "required": false,
                                    "help": "Date d'achat"
                                }
                            },
                            "retailer_composite": {
                                "extra_form_type": "text",
                                "options": {
                                    "label": "Enseigne du magasin",
                                    "required": false
                                }
                            },
                            "extra_postal_code": {
                                "extra_form_type": "text",
                                "options": {
                                    "label": "Code postal",
                                    "required": false
                                }
                            },
                            "_ean_recap": {
                                "extra_form_type": "html",
                                "options": {
                                    "content": "<p>FACTURE: <br/></p>"
                                }
                            },
                            "is_expected_serial_number": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Est-ce le bon document ?",
                                    "required": false,
                                    "help": "photo du code à barre produit"
                                }
                            },
                            "is_readable_serial_number": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Le code à barre est-il lisible ?",
                                    "required": false
                                }
                            },
                            "is_bad_product": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Le ticket de caisse précise-t-il bien le bon produit ?",
                                    "required": false,
                                    "help": "la facture mentionne l'achat de produit(s) concerné(s) par cette offre."
                                }
                            },
                            "num_bcd": {
                                "extra_form_type": "text",
                                "options": {
                                    "label": "N°  facture",
                                    "required": false
                                }
                            },
                            "purchase-1_noInsurance": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Participation hors-assurance",
                                    "required": false
                                }
                            }
                        }
                    }
                }
            }
        },
        "step_proof_duplicate": {
            "type": "moderate_participation",
            "options": {
                "title": "Text",
                "display_title": false,
                "previous_options": {
                    "label": "Etape précédente",
                    "attr": {
                        "class": "btn previous"
                    }
                },
                "moderation_context": {
                    "items": {
                        "media": {
                            "data": [
                                "{{ '{{ session.participation.rawData[\'purchase-1_proof-1\']|json_encode }}' }}"
                            ]
                        }
                    }
                },
                "@builder": {
                    "worker": "extra_form_builder",
                    "parameters": {
                        "configuration": {
                            "media_duplicated": {
                                "extra_form_type": "html",
                                "options": {
                                    "label": "Ces preuves d'achat sont-elles identiques ?",
                                    "data": "<img style='width: 450px; height: 600px;' src={{ '{{ flow_data.retrievedData.step_proof_receipt.store_media_limit|default(\'media not found\') }}' }}.png />",
                                    "required": false,
                                    "mapped": 1
                                }
                            },
                            "is_duplicated_document": {
                                "extra_form_type": "checkbox",
                                "options": {
                                    "label": "Ces preuves d'achat sont-elles identiques ?",
                                    "required": false,
                                    "mapped": 1
                                }
                            }
                        }
                    }
                }
            }
        },
        "step_confirmation": {
            "type": "html",
            "options": {
                "title": "Confirmation",
                "content": "Participation non conforme ou doublon ! Voulez-vous valider la moderation ?",
                "previous_options": {
                    "label": "Précédent",
                    "attr": {
                        "class": "btn btn-default fa btn_actions"
                    }
                }
            }
        }
    },
    "paths": [{
            "type": "conditional_destination",
            "options": {
                "source": "step_proof_receipt",
                "destinations": {
                    "step_confirmation": "{{ '{% if flow_data.retrievedData.step_proof_receipt.non_compliance_codes.0 is defined %}1{% else %}0{% endif %}' }}",
                    "step_proof_duplicate": {
                        "media_limit": {
                            "participation": "{{ '{{ session.participation.id }}' }}",
                            "limit": 1,
                            "namespace": "{{ participation.offer.reference }}",
                            "data": {
                                "offer": "{{ participation.offer.reference }}",
                                "retailer_composite": "{{ '{{ flow_data.data.step_proof_receipt.retailer_composite }}' }}",
                                "extra_postal_code": "{{ '{{ flow_data.data.step_proof_receipt.extra_postal_code }}' }}",
                                "num_bcd": "{{ '{{ flow_data.data.step_proof_receipt.num_bcd }}' }}"
                            }
                        }
                    }
                },
                "next_options": {
                    "label": "Valider",
                    "attr": {
                        "class": "btn end"
                    }
                },
                "events": {
                    "form.post_bind": [{
                            "action": "change_data",
                            "name": "refound_benefit_amount",
                            "parameters": {
                                "fields": [{
                                    "target": {
                                        "path": "step_proof_receipt.extra_rembourseAmount",
                                        "types": [
                                            "data"
                                        ]
                                    },
                                    "value": "{{ '{% set amount = 0 %}{% if flow_data.data.step_proof_receipt[\'purchase_product\'] in [\'Silence & Air\' , \'Oxygen Pool Air\' , \'Mix Color\' , \'Vitalité\']  %}{% set amount = 150 %}{% else %}{% set amount = 200 %}{% endif %}{{ amount }}' }}"
                                }]
                            }
                        },
                        {
                            "action": "apply_non_compliance_code",
                            "name": "non_compliance_codes",
                            "parameters": {
                                "codes": [{
                                        "code": "58141",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.extra_evidence == false }}' }}"
                                    },
                                    {
                                        "code": "29342",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.is_expected_document == false }}' }}"
                                    },
                                    {
                                        "code": "28342",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.is_readable_document == false }}' }}"
                                    },
                                    {
                                        "code": "18402",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.is_product == false }}' }}"
                                    },
                                    {
                                        "code": "29291",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.are_all_elements_present == false }}' }}"
                                    },
                                    {
                                        "code": "18211",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.control_isExpectedResult1 == false  }}' }}"
                                    },
                                    {
                                        "code": "29341",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.is_expected_serial_number == false }}' }}"
                                    },
                                    {
                                        "code": "28341",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.is_readable_serial_number == false }}' }}"
                                    },
                                    {
                                        "code": "18401",
                                        "to_apply": "{{ '{{ flow_data.data.step_proof_receipt.is_bad_product == false }}' }}"
                                    }
                                ]
                            }
                        },
                        {
                            "action": "moderate_participation",
                            "parameters": {
                                "id": "{{ '{{ session.participation.id }}' }}",
                                "raw_eligibility": "{{ '{{ session.participation.rawEligibility|json_encode|default(\'[]\') }}' }}",
                                "user": {
                                    "id": "{{ '{{ user.id|default(\'\') }}' }}",
                                    "last_name": "{{ '{{ user.lastName|default(\'\') }}' }}",
                                    "first_name": "{{ '{{ user.firstName|default(\'\') }}' }}",
                                    "roles": "{{ '{{ user.roles|json_encode|default(\'\') }}' }}"
                                },
                                "status": "{{ '{% set status = \'compliant\'%}{% if flow_data.retrievedData.step_proof_receipt.non_compliance_codes.0 is defined %}{% set status = \'not_compliant\'%}{% endif %}{{ status|trim }}' }}",
                                "ended": true,
                                "non_compliance_codes": "{{ '{{ flow_data.retrievedData.step_proof_receipt.non_compliance_codes|json_encode }}' }}"
                            }
                        },
                        {
                            "action": "store_media_limit",
                            "parameters": {
                                "namespace": "{{ participation.offer.reference }}",
                                "participation": "{{ '{{ session.participation.id }}' }}",
                                "data": {
                                    "media": "{{ '{{ session.participation.rawData[\'purchase-1_proof-1\'][\'publicUri\'] }}' }}",
                                    "offer": "{{ participation.offer.reference }}",
                                    "retailer_composite": "{{ '{{ flow_data.data.step_proof_receipt.retailer_composite }}' }}",
                                    "extra_postal_code": "{{ '{{ flow_data.data.step_proof_receipt.extra_postal_code }}' }}",
                                    "num_bcd": "{{ '{{ flow_data.data.step_proof_receipt.num_bcd }}' }}"
                                },
                                "keys": [
                                    "offer",
                                    "retailer_composite",
                                    "extra_postal_code",
                                    "num_bcd"
                                ]
                            }
                        }
                    ]
                }
            }
        },
        {
            "type": "end",
            "options": {
                "source": "step_proof_duplicate",
                "next_options": {
                    "label": "Etape suivante",
                    "attr": {
                        "class": "btn next"
                    }
                },
                "events": {
                    "form.post_bind": [{
                            "action": "apply_non_compliance_code",
                            "name": "non_compliance_codes",
                            "parameters": {
                                "codes": [{
                                    "code": "48341",
                                    "to_apply": "{{ '{{ flow_data.data.step_proof_duplicate.is_duplicated_document == true }}' }}"
                                }]
                            }
                        },
                        {
                            "action": "moderate_participation",
                            "parameters": {
                                "id": "{{ '{{ session.participation.id }}' }}",
                                "raw_eligibility": "{{ '{{ session.participation.rawEligibility|json_encode|default(\'[]\') }}' }}",
                                "user": {
                                    "id": "{{ '{{ user.id|default(\'\') }}' }}",
                                    "last_name": "{{ '{{ user.lastName|default(\'\') }}' }}",
                                    "first_name": "{{ '{{ user.firstName|default(\'\') }}' }}",
                                    "roles": "{{ '{{ user.roles|json_encode|default(\'\') }}' }}"
                                },
                                "status": "{{ '{% set status = \'compliant\'%}{% if flow_data.retrievedData.step_proof_duplicate.non_compliance_codes.0 is defined %}{% set status = \'duplicated\'%}{% endif %}{{ status|trim }}' }}",
                                "ended": true,
                                "non_compliance_codes": "{{ '{{ flow_data.retrievedData.step_proof_duplicate.non_compliance_codes|json_encode }}' }}"
                            }
                        },
                        {
                            "action": "update_rawduplicate_participation",
                            "parameters": {
                                "logical_expression": "{{ '{% if flow_data.data.step_proof_duplicate.is_duplicated_document == 1 %}1{% else %}0{% endif %}' }}",
                                "participation": "{{ '{{ session.participation.id }}' }}",
                                "rawDuplicate": "{{ '{{ session.participation.rawDuplicate|json_encode|default(\'[]\') }}' }}",
                                "limit": 1,
                                "namespace": "{{ participation.offer.reference }}",
                                "data": {
                                    "offer": "{{ participation.offer.reference }}",
                                    "retailer_composite": "{{ '{{ flow_data.data.step_proof_receipt.retailer_composite }}' }}",
                                    "extra_postal_code": "{{ '{{ flow_data.data.step_proof_receipt.extra_postal_code }}' }}",
                                    "num_bcd": "{{ '{{ flow_data.data.step_proof_receipt.num_bcd }}' }}"
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            "type": "end",
            "options": {
                "source": "step_confirmation",
                "next_options": {
                    "label": "Valider",
                    "attr": {
                        "class": "btn end"
                    }
                }
            }
        }
    ],
    "options": [],
    "graphPositions": {
        "steps": {
            "step_proof_receipt": {
                "x": 20,
                "y": 20
            },
            "step_proof_duplicate": {
                "x": 220,
                "y": 20
            },
            "step_confirmation": {
                "x": 170,
                "y": 120
            }
        },
        "paths": [{
                "intersection": {
                    "x": 370,
                    "y": 120
                },
                "endOfPath": {
                    "x": 320,
                    "y": 220
                }
            },
            {
                "endOfPath": {
                    "x": 520,
                    "y": 220
                }
            },
            {
                "endOfPath": {
                    "x": 470,
                    "y": 320
                }
            }
        ]
    }
}