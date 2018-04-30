--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO stroyshop;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO stroyshop;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO stroyshop;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO stroyshop;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO stroyshop;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO stroyshop;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO stroyshop;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO stroyshop;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO stroyshop;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO stroyshop;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO stroyshop;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO stroyshop;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO stroyshop;

--
-- Name: easy_thumbnails_source; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.easy_thumbnails_source (
    id integer NOT NULL,
    storage_hash character varying(40) NOT NULL,
    name character varying(255) NOT NULL,
    modified timestamp with time zone NOT NULL
);


ALTER TABLE public.easy_thumbnails_source OWNER TO stroyshop;

--
-- Name: easy_thumbnails_source_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.easy_thumbnails_source_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.easy_thumbnails_source_id_seq OWNER TO stroyshop;

--
-- Name: easy_thumbnails_source_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.easy_thumbnails_source_id_seq OWNED BY public.easy_thumbnails_source.id;


--
-- Name: easy_thumbnails_thumbnail; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.easy_thumbnails_thumbnail (
    id integer NOT NULL,
    storage_hash character varying(40) NOT NULL,
    name character varying(255) NOT NULL,
    modified timestamp with time zone NOT NULL,
    source_id integer NOT NULL
);


ALTER TABLE public.easy_thumbnails_thumbnail OWNER TO stroyshop;

--
-- Name: easy_thumbnails_thumbnail_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.easy_thumbnails_thumbnail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.easy_thumbnails_thumbnail_id_seq OWNER TO stroyshop;

--
-- Name: easy_thumbnails_thumbnail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.easy_thumbnails_thumbnail_id_seq OWNED BY public.easy_thumbnails_thumbnail.id;


--
-- Name: easy_thumbnails_thumbnaildimensions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.easy_thumbnails_thumbnaildimensions (
    id integer NOT NULL,
    thumbnail_id integer NOT NULL,
    width integer,
    height integer,
    CONSTRAINT easy_thumbnails_thumbnaildimensions_height_check CHECK ((height >= 0)),
    CONSTRAINT easy_thumbnails_thumbnaildimensions_width_check CHECK ((width >= 0))
);


ALTER TABLE public.easy_thumbnails_thumbnaildimensions OWNER TO stroyshop;

--
-- Name: easy_thumbnails_thumbnaildimensions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.easy_thumbnails_thumbnaildimensions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.easy_thumbnails_thumbnaildimensions_id_seq OWNER TO stroyshop;

--
-- Name: easy_thumbnails_thumbnaildimensions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.easy_thumbnails_thumbnaildimensions_id_seq OWNED BY public.easy_thumbnails_thumbnaildimensions.id;


--
-- Name: filer_clipboard; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_clipboard (
    id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.filer_clipboard OWNER TO stroyshop;

--
-- Name: filer_clipboard_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.filer_clipboard_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filer_clipboard_id_seq OWNER TO stroyshop;

--
-- Name: filer_clipboard_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.filer_clipboard_id_seq OWNED BY public.filer_clipboard.id;


--
-- Name: filer_clipboarditem; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_clipboarditem (
    id integer NOT NULL,
    clipboard_id integer NOT NULL,
    file_id integer NOT NULL
);


ALTER TABLE public.filer_clipboarditem OWNER TO stroyshop;

--
-- Name: filer_clipboarditem_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.filer_clipboarditem_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filer_clipboarditem_id_seq OWNER TO stroyshop;

--
-- Name: filer_clipboarditem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.filer_clipboarditem_id_seq OWNED BY public.filer_clipboarditem.id;


--
-- Name: filer_file; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_file (
    id integer NOT NULL,
    file character varying(255),
    _file_size bigint,
    sha1 character varying(40) NOT NULL,
    has_all_mandatory_data boolean NOT NULL,
    original_filename character varying(255),
    name character varying(255) NOT NULL,
    description text,
    uploaded_at timestamp with time zone NOT NULL,
    modified_at timestamp with time zone NOT NULL,
    is_public boolean NOT NULL,
    folder_id integer,
    owner_id integer,
    polymorphic_ctype_id integer
);


ALTER TABLE public.filer_file OWNER TO stroyshop;

--
-- Name: filer_file_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.filer_file_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filer_file_id_seq OWNER TO stroyshop;

--
-- Name: filer_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.filer_file_id_seq OWNED BY public.filer_file.id;


--
-- Name: filer_folder; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_folder (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    uploaded_at timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL,
    modified_at timestamp with time zone NOT NULL,
    lft integer NOT NULL,
    rght integer NOT NULL,
    tree_id integer NOT NULL,
    level integer NOT NULL,
    owner_id integer,
    parent_id integer,
    CONSTRAINT filer_folder_level_check CHECK ((level >= 0)),
    CONSTRAINT filer_folder_lft_check CHECK ((lft >= 0)),
    CONSTRAINT filer_folder_rght_check CHECK ((rght >= 0)),
    CONSTRAINT filer_folder_tree_id_check CHECK ((tree_id >= 0))
);


ALTER TABLE public.filer_folder OWNER TO stroyshop;

--
-- Name: filer_folder_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.filer_folder_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filer_folder_id_seq OWNER TO stroyshop;

--
-- Name: filer_folder_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.filer_folder_id_seq OWNED BY public.filer_folder.id;


--
-- Name: filer_folderpermission; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_folderpermission (
    id integer NOT NULL,
    type smallint NOT NULL,
    everybody boolean NOT NULL,
    can_edit smallint,
    can_read smallint,
    can_add_children smallint,
    folder_id integer,
    group_id integer,
    user_id integer
);


ALTER TABLE public.filer_folderpermission OWNER TO stroyshop;

--
-- Name: filer_folderpermission_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.filer_folderpermission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filer_folderpermission_id_seq OWNER TO stroyshop;

--
-- Name: filer_folderpermission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.filer_folderpermission_id_seq OWNED BY public.filer_folderpermission.id;


--
-- Name: filer_image; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_image (
    file_ptr_id integer NOT NULL,
    _height integer,
    _width integer,
    date_taken timestamp with time zone,
    default_alt_text character varying(255),
    default_caption character varying(255),
    author character varying(255),
    must_always_publish_author_credit boolean NOT NULL,
    must_always_publish_copyright boolean NOT NULL,
    subject_location character varying(64) NOT NULL
);


ALTER TABLE public.filer_image OWNER TO stroyshop;

--
-- Name: filer_thumbnailoption; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.filer_thumbnailoption (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    crop boolean NOT NULL,
    upscale boolean NOT NULL
);


ALTER TABLE public.filer_thumbnailoption OWNER TO stroyshop;

--
-- Name: filer_thumbnailoption_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.filer_thumbnailoption_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.filer_thumbnailoption_id_seq OWNER TO stroyshop;

--
-- Name: filer_thumbnailoption_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.filer_thumbnailoption_id_seq OWNED BY public.filer_thumbnailoption.id;


--
-- Name: main_banner; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_banner (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_banner OWNER TO stroyshop;

--
-- Name: main_banner_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_banner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_banner_id_seq OWNER TO stroyshop;

--
-- Name: main_banner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_banner_id_seq OWNED BY public.main_banner.id;


--
-- Name: main_banner_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_banner_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    image character varying(100) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_banner_translation OWNER TO stroyshop;

--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_banner_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_banner_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_banner_translation_id_seq OWNED BY public.main_banner_translation.id;


--
-- Name: main_customermenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_customermenu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_customermenu OWNER TO stroyshop;

--
-- Name: main_customermenu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_customermenu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_customermenu_id_seq OWNER TO stroyshop;

--
-- Name: main_customermenu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_customermenu_id_seq OWNED BY public.main_customermenu.id;


--
-- Name: main_customermenu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_customermenu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_customermenu_translation OWNER TO stroyshop;

--
-- Name: main_customermenu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_customermenu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_customermenu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_customermenu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_customermenu_translation_id_seq OWNED BY public.main_customermenu_translation.id;


--
-- Name: main_customersmenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_customersmenu (
    menu_ptr_id integer NOT NULL
);


ALTER TABLE public.main_customersmenu OWNER TO stroyshop;

--
-- Name: main_menu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_menu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_menu OWNER TO stroyshop;

--
-- Name: main_menu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_menu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_menu_id_seq OWNER TO stroyshop;

--
-- Name: main_menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_menu_id_seq OWNED BY public.main_menu.id;


--
-- Name: main_menu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_menu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_menu_translation OWNER TO stroyshop;

--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_menu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_menu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_menu_translation_id_seq OWNED BY public.main_menu_translation.id;


--
-- Name: main_static; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_static (
    id integer NOT NULL
);


ALTER TABLE public.main_static OWNER TO stroyshop;

--
-- Name: main_static_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_static_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_static_id_seq OWNER TO stroyshop;

--
-- Name: main_static_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_static_id_seq OWNED BY public.main_static.id;


--
-- Name: main_static_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_static_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    image character varying(100),
    body text NOT NULL,
    master_id integer
);


ALTER TABLE public.main_static_translation OWNER TO stroyshop;

--
-- Name: main_static_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_static_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_static_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_static_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_static_translation_id_seq OWNED BY public.main_static_translation.id;


--
-- Name: main_staticfooterpage; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_staticfooterpage (
    id integer NOT NULL,
    menu_type integer
);


ALTER TABLE public.main_staticfooterpage OWNER TO stroyshop;

--
-- Name: main_staticfooterpage_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_staticfooterpage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_staticfooterpage_id_seq OWNER TO stroyshop;

--
-- Name: main_staticfooterpage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_staticfooterpage_id_seq OWNED BY public.main_staticfooterpage.id;


--
-- Name: main_staticfooterpage_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_staticfooterpage_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    body text NOT NULL,
    master_id integer
);


ALTER TABLE public.main_staticfooterpage_translation OWNER TO stroyshop;

--
-- Name: main_staticfooterpage_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_staticfooterpage_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_staticfooterpage_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_staticfooterpage_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_staticfooterpage_translation_id_seq OWNED BY public.main_staticfooterpage_translation.id;


--
-- Name: main_usermenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_usermenu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE public.main_usermenu OWNER TO stroyshop;

--
-- Name: main_usermenu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_usermenu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_usermenu_id_seq OWNER TO stroyshop;

--
-- Name: main_usermenu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_usermenu_id_seq OWNED BY public.main_usermenu.id;


--
-- Name: main_usermenu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_usermenu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.main_usermenu_translation OWNER TO stroyshop;

--
-- Name: main_usermenu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.main_usermenu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.main_usermenu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_usermenu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.main_usermenu_translation_id_seq OWNED BY public.main_usermenu_translation.id;


--
-- Name: main_usersmenu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.main_usersmenu (
    menu_ptr_id integer NOT NULL
);


ALTER TABLE public.main_usersmenu OWNER TO stroyshop;

--
-- Name: orders_cart; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.orders_cart (
    id integer NOT NULL,
    session_key character varying(255) NOT NULL,
    count integer NOT NULL,
    status boolean NOT NULL,
    total_price numeric(10,2) NOT NULL,
    order_id integer,
    variation_id integer NOT NULL
);


ALTER TABLE public.orders_cart OWNER TO stroyshop;

--
-- Name: orders_cart_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.orders_cart_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_cart_id_seq OWNER TO stroyshop;

--
-- Name: orders_cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.orders_cart_id_seq OWNED BY public.orders_cart.id;


--
-- Name: orders_order; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.orders_order (
    id integer NOT NULL,
    client_name character varying(60) NOT NULL,
    created timestamp with time zone NOT NULL,
    customer_id integer,
    phone character varying(12) NOT NULL,
    shipping_address text NOT NULL,
    state integer NOT NULL,
    total_price numeric(10,2),
    order_unique_id character varying(120),
    products text NOT NULL
);


ALTER TABLE public.orders_order OWNER TO stroyshop;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO stroyshop;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders_order.id;


--
-- Name: payment_paycomtransaction; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.payment_paycomtransaction (
    id integer NOT NULL,
    paycom_transaction_id character varying(255) NOT NULL,
    paycom_time character varying(15) NOT NULL,
    paycom_time_datetime timestamp with time zone NOT NULL,
    create_time timestamp with time zone NOT NULL,
    perform_time timestamp with time zone,
    cancel_time timestamp with time zone,
    amount character varying(50) NOT NULL,
    state integer NOT NULL,
    reason integer,
    receivers text,
    order_id integer NOT NULL
);


ALTER TABLE public.payment_paycomtransaction OWNER TO stroyshop;

--
-- Name: payment_paycomtransaction_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.payment_paycomtransaction_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_paycomtransaction_id_seq OWNER TO stroyshop;

--
-- Name: payment_paycomtransaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.payment_paycomtransaction_id_seq OWNED BY public.payment_paycomtransaction.id;


--
-- Name: products_brands; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_brands (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    logo character varying(100) NOT NULL,
    category_id integer
);


ALTER TABLE public.products_brands OWNER TO stroyshop;

--
-- Name: products_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_brands_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_brands_id_seq OWNER TO stroyshop;

--
-- Name: products_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_brands_id_seq OWNED BY public.products_brands.id;


--
-- Name: products_category; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_category (
    id integer NOT NULL,
    "order" integer NOT NULL,
    lft integer NOT NULL,
    rght integer NOT NULL,
    tree_id integer NOT NULL,
    mptt_level integer NOT NULL,
    parent_id integer,
    CONSTRAINT products_category_lft_check CHECK ((lft >= 0)),
    CONSTRAINT products_category_mptt_level_675133a8_check CHECK ((mptt_level >= 0)),
    CONSTRAINT products_category_rght_check CHECK ((rght >= 0)),
    CONSTRAINT products_category_tree_id_check CHECK ((tree_id >= 0))
);


ALTER TABLE public.products_category OWNER TO stroyshop;

--
-- Name: products_category_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_category_id_seq OWNER TO stroyshop;

--
-- Name: products_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_category_id_seq OWNED BY public.products_category.id;


--
-- Name: products_category_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_category_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer,
    slug character varying(50) NOT NULL
);


ALTER TABLE public.products_category_translation OWNER TO stroyshop;

--
-- Name: products_category_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_category_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_category_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_category_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_category_translation_id_seq OWNED BY public.products_category_translation.id;


--
-- Name: products_color; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_color (
    id integer NOT NULL,
    color character varying(18) NOT NULL
);


ALTER TABLE public.products_color OWNER TO stroyshop;

--
-- Name: products_color_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_color_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.products_color_translation OWNER TO stroyshop;

--
-- Name: products_color_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_color_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_color_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_color_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_color_translation_id_seq OWNED BY public.products_color_translation.id;


--
-- Name: products_product; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_product (
    id integer NOT NULL,
    name character varying(120) NOT NULL,
    description text,
    characters text,
    brand_id integer NOT NULL,
    category_id integer NOT NULL,
    owner_id integer NOT NULL,
    updated date NOT NULL,
    available_in_stock boolean NOT NULL,
    volume_id integer NOT NULL,
    is_recommended boolean NOT NULL,
    price numeric(10,2),
    is_top boolean NOT NULL,
    default_image character varying(60) NOT NULL,
    image_0 character varying(100),
    image_1 character varying(100),
    image_2 character varying(100)
);


ALTER TABLE public.products_product OWNER TO stroyshop;

--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_id_seq OWNER TO stroyshop;

--
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products_product.id;


--
-- Name: products_productcolor_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_productcolor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_productcolor_id_seq OWNER TO stroyshop;

--
-- Name: products_productcolor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_productcolor_id_seq OWNED BY public.products_color.id;


--
-- Name: products_productimage; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_productimage (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.products_productimage OWNER TO stroyshop;

--
-- Name: products_productimage_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_productimage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_productimage_id_seq OWNER TO stroyshop;

--
-- Name: products_productimage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_productimage_id_seq OWNED BY public.products_productimage.id;


--
-- Name: products_review; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_review (
    created_at timestamp with time zone NOT NULL,
    id integer NOT NULL,
    text text NOT NULL,
    is_approved boolean NOT NULL,
    product_id integer NOT NULL,
    reviewer_location character varying(120),
    subject character varying(60) NOT NULL,
    reviewer character varying(120) NOT NULL
);


ALTER TABLE public.products_review OWNER TO stroyshop;

--
-- Name: products_review_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_review_id_seq OWNER TO stroyshop;

--
-- Name: products_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_review_id_seq OWNED BY public.products_review.id;


--
-- Name: products_variation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_variation (
    id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    quantity integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(60) NOT NULL,
    color_id integer
);


ALTER TABLE public.products_variation OWNER TO stroyshop;

--
-- Name: products_variation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_variation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_variation_id_seq OWNER TO stroyshop;

--
-- Name: products_variation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_variation_id_seq OWNED BY public.products_variation.id;


--
-- Name: products_volumetype; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_volumetype (
    id integer NOT NULL
);


ALTER TABLE public.products_volumetype OWNER TO stroyshop;

--
-- Name: products_volumetype_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_volumetype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_volumetype_id_seq OWNER TO stroyshop;

--
-- Name: products_volumetype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_volumetype_id_seq OWNED BY public.products_volumetype.id;


--
-- Name: products_volumetype_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.products_volumetype_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE public.products_volumetype_translation OWNER TO stroyshop;

--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.products_volumetype_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_volumetype_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.products_volumetype_translation_id_seq OWNED BY public.products_volumetype_translation.id;


--
-- Name: users_client; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_client (
    id integer NOT NULL,
    address text,
    user_id integer NOT NULL,
    delivery_address_id integer
);


ALTER TABLE public.users_client OWNER TO stroyshop;

--
-- Name: users_client_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_client_id_seq OWNER TO stroyshop;

--
-- Name: users_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_client_id_seq OWNED BY public.users_client.id;


--
-- Name: users_deliveryaddress; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_deliveryaddress (
    id integer NOT NULL,
    address text NOT NULL,
    email character varying(60) NOT NULL,
    is_default boolean NOT NULL,
    phone character varying(60) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.users_deliveryaddress OWNER TO stroyshop;

--
-- Name: users_deliveryaddress_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_deliveryaddress_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_deliveryaddress_id_seq OWNER TO stroyshop;

--
-- Name: users_deliveryaddress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_deliveryaddress_id_seq OWNED BY public.users_deliveryaddress.id;


--
-- Name: users_files; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_files (
    id integer NOT NULL,
    file character varying(100) NOT NULL
);


ALTER TABLE public.users_files OWNER TO stroyshop;

--
-- Name: users_files_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_files_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_files_id_seq OWNER TO stroyshop;

--
-- Name: users_files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_files_id_seq OWNED BY public.users_files.id;


--
-- Name: users_merchant; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_merchant (
    id integer NOT NULL,
    merchant_type integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.users_merchant OWNER TO stroyshop;

--
-- Name: users_merchant_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_merchant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_merchant_id_seq OWNER TO stroyshop;

--
-- Name: users_merchant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_merchant_id_seq OWNED BY public.users_merchant.id;


--
-- Name: users_paymentcards; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_paymentcards (
    id integer NOT NULL,
    card_holder character varying(60) NOT NULL,
    cart_number character varying(60) NOT NULL,
    expiration_date date NOT NULL,
    billing_address text,
    holder_id integer NOT NULL,
    is_default boolean NOT NULL
);


ALTER TABLE public.users_paymentcards OWNER TO stroyshop;

--
-- Name: users_paymentcards_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_paymentcards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_paymentcards_id_seq OWNER TO stroyshop;

--
-- Name: users_paymentcards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_paymentcards_id_seq OWNED BY public.users_paymentcards.id;


--
-- Name: users_user; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    is_staff boolean NOT NULL,
    phone character varying(12) NOT NULL,
    email character varying(254),
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    is_active boolean NOT NULL,
    avatar_id integer
);


ALTER TABLE public.users_user OWNER TO stroyshop;

--
-- Name: users_user_groups; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.users_user_groups OWNER TO stroyshop;

--
-- Name: users_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_groups_id_seq OWNER TO stroyshop;

--
-- Name: users_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_user_groups_id_seq OWNED BY public.users_user_groups.id;


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO stroyshop;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users_user.id;


--
-- Name: users_user_user_permissions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE public.users_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.users_user_user_permissions OWNER TO stroyshop;

--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE public.users_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_user_permissions_id_seq OWNER TO stroyshop;

--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE public.users_user_user_permissions_id_seq OWNED BY public.users_user_user_permissions.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: easy_thumbnails_source id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_source ALTER COLUMN id SET DEFAULT nextval('public.easy_thumbnails_source_id_seq'::regclass);


--
-- Name: easy_thumbnails_thumbnail id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnail ALTER COLUMN id SET DEFAULT nextval('public.easy_thumbnails_thumbnail_id_seq'::regclass);


--
-- Name: easy_thumbnails_thumbnaildimensions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnaildimensions ALTER COLUMN id SET DEFAULT nextval('public.easy_thumbnails_thumbnaildimensions_id_seq'::regclass);


--
-- Name: filer_clipboard id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboard ALTER COLUMN id SET DEFAULT nextval('public.filer_clipboard_id_seq'::regclass);


--
-- Name: filer_clipboarditem id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboarditem ALTER COLUMN id SET DEFAULT nextval('public.filer_clipboarditem_id_seq'::regclass);


--
-- Name: filer_file id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_file ALTER COLUMN id SET DEFAULT nextval('public.filer_file_id_seq'::regclass);


--
-- Name: filer_folder id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folder ALTER COLUMN id SET DEFAULT nextval('public.filer_folder_id_seq'::regclass);


--
-- Name: filer_folderpermission id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folderpermission ALTER COLUMN id SET DEFAULT nextval('public.filer_folderpermission_id_seq'::regclass);


--
-- Name: filer_thumbnailoption id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_thumbnailoption ALTER COLUMN id SET DEFAULT nextval('public.filer_thumbnailoption_id_seq'::regclass);


--
-- Name: main_banner id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner ALTER COLUMN id SET DEFAULT nextval('public.main_banner_id_seq'::regclass);


--
-- Name: main_banner_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation ALTER COLUMN id SET DEFAULT nextval('public.main_banner_translation_id_seq'::regclass);


--
-- Name: main_customermenu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu ALTER COLUMN id SET DEFAULT nextval('public.main_customermenu_id_seq'::regclass);


--
-- Name: main_customermenu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation ALTER COLUMN id SET DEFAULT nextval('public.main_customermenu_translation_id_seq'::regclass);


--
-- Name: main_menu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu ALTER COLUMN id SET DEFAULT nextval('public.main_menu_id_seq'::regclass);


--
-- Name: main_menu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation ALTER COLUMN id SET DEFAULT nextval('public.main_menu_translation_id_seq'::regclass);


--
-- Name: main_static id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static ALTER COLUMN id SET DEFAULT nextval('public.main_static_id_seq'::regclass);


--
-- Name: main_static_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation ALTER COLUMN id SET DEFAULT nextval('public.main_static_translation_id_seq'::regclass);


--
-- Name: main_staticfooterpage id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_staticfooterpage ALTER COLUMN id SET DEFAULT nextval('public.main_staticfooterpage_id_seq'::regclass);


--
-- Name: main_staticfooterpage_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_staticfooterpage_translation ALTER COLUMN id SET DEFAULT nextval('public.main_staticfooterpage_translation_id_seq'::regclass);


--
-- Name: main_usermenu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu ALTER COLUMN id SET DEFAULT nextval('public.main_usermenu_id_seq'::regclass);


--
-- Name: main_usermenu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation ALTER COLUMN id SET DEFAULT nextval('public.main_usermenu_translation_id_seq'::regclass);


--
-- Name: orders_cart id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart ALTER COLUMN id SET DEFAULT nextval('public.orders_cart_id_seq'::regclass);


--
-- Name: orders_order id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order ALTER COLUMN id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: payment_paycomtransaction id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.payment_paycomtransaction ALTER COLUMN id SET DEFAULT nextval('public.payment_paycomtransaction_id_seq'::regclass);


--
-- Name: products_brands id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_brands ALTER COLUMN id SET DEFAULT nextval('public.products_brands_id_seq'::regclass);


--
-- Name: products_category id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category ALTER COLUMN id SET DEFAULT nextval('public.products_category_id_seq'::regclass);


--
-- Name: products_category_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation ALTER COLUMN id SET DEFAULT nextval('public.products_category_translation_id_seq'::regclass);


--
-- Name: products_color id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color ALTER COLUMN id SET DEFAULT nextval('public.products_productcolor_id_seq'::regclass);


--
-- Name: products_color_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation ALTER COLUMN id SET DEFAULT nextval('public.products_color_translation_id_seq'::regclass);


--
-- Name: products_product id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product ALTER COLUMN id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- Name: products_productimage id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_productimage ALTER COLUMN id SET DEFAULT nextval('public.products_productimage_id_seq'::regclass);


--
-- Name: products_review id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_review ALTER COLUMN id SET DEFAULT nextval('public.products_review_id_seq'::regclass);


--
-- Name: products_variation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation ALTER COLUMN id SET DEFAULT nextval('public.products_variation_id_seq'::regclass);


--
-- Name: products_volumetype id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype ALTER COLUMN id SET DEFAULT nextval('public.products_volumetype_id_seq'::regclass);


--
-- Name: products_volumetype_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation ALTER COLUMN id SET DEFAULT nextval('public.products_volumetype_translation_id_seq'::regclass);


--
-- Name: users_client id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client ALTER COLUMN id SET DEFAULT nextval('public.users_client_id_seq'::regclass);


--
-- Name: users_deliveryaddress id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_deliveryaddress ALTER COLUMN id SET DEFAULT nextval('public.users_deliveryaddress_id_seq'::regclass);


--
-- Name: users_files id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_files ALTER COLUMN id SET DEFAULT nextval('public.users_files_id_seq'::regclass);


--
-- Name: users_merchant id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant ALTER COLUMN id SET DEFAULT nextval('public.users_merchant_id_seq'::regclass);


--
-- Name: users_paymentcards id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_paymentcards ALTER COLUMN id SET DEFAULT nextval('public.users_paymentcards_id_seq'::regclass);


--
-- Name: users_user id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user ALTER COLUMN id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Name: users_user_groups id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups ALTER COLUMN id SET DEFAULT nextval('public.users_user_groups_id_seq'::regclass);


--
-- Name: users_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.users_user_user_permissions_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can add permission	2	add_permission
5	Can change permission	2	change_permission
6	Can delete permission	2	delete_permission
7	Can add group	3	add_group
8	Can change group	3	change_group
9	Can delete group	3	delete_group
10	Can add content type	4	add_contenttype
11	Can change content type	4	change_contenttype
12	Can delete content type	4	delete_contenttype
13	Can add session	5	add_session
14	Can change session	5	change_session
15	Can delete session	5	delete_session
16	Can add user	6	add_user
17	Can change user	6	change_user
18	Can delete user	6	delete_user
19	Can add category	7	add_category
20	Can change category	7	change_category
21	Can delete category	7	delete_category
22	Can add Category tree	8	add_categorytree
23	Can change Category tree	8	change_categorytree
24	Can delete Category tree	8	delete_categorytree
25	Can add categories	9	add_categories
26	Can change categories	9	change_categories
27	Can delete categories	9	delete_categories
28	Can add Category tree	12	add_categories
29	Can change Category tree	12	change_categories
30	Can delete Category tree	12	delete_categories
31	Can add category	14	add_category
32	Can change category	14	change_category
33	Can delete category	14	delete_category
34	Can add menu	15	add_menu
35	Can change menu	15	change_menu
36	Can delete menu	15	delete_menu
37	Can add banner	17	add_banner
38	Can change banner	17	change_banner
39	Can delete banner	17	delete_banner
40	Can add brands	19	add_brands
41	Can change brands	19	change_brands
42	Can delete brands	19	delete_brands
43	Can add client	20	add_client
44	Can change client	20	change_client
45	Can delete client	20	delete_client
46	Can add merchant	21	add_merchant
47	Can change merchant	21	change_merchant
48	Can delete merchant	21	delete_merchant
49	Can add variation	22	add_variation
50	Can change variation	22	change_variation
51	Can delete variation	22	delete_variation
52	Can add product	23	add_product
53	Can change product	23	change_product
54	Can delete product	23	delete_product
55	Can add product image	24	add_productimage
56	Can change product image	24	change_productimage
57	Can delete product image	24	delete_productimage
58	Can add review	25	add_review
59	Can change review	25	change_review
60	Can delete review	25	delete_review
61	Can add static	26	add_static
62	Can change static	26	change_static
63	Can delete static	26	delete_static
64	Can add color	28	add_color
65	Can change color	28	change_color
66	Can delete color	28	delete_color
67	Can add product color	29	add_productcolor
68	Can change product color	29	change_productcolor
69	Can delete product color	29	delete_productcolor
70	Can add volume type	31	add_volumetype
71	Can change volume type	31	change_volumetype
72	Can delete volume type	31	delete_volumetype
73	Can add cart	33	add_cart
74	Can change cart	33	change_cart
75	Can delete cart	33	delete_cart
76	Can add order	34	add_order
77	Can change order	34	change_order
78	Can delete order	34	delete_order
79	Can add files	35	add_files
80	Can change files	35	change_files
81	Can delete files	35	delete_files
82	Can add users menu	36	add_usersmenu
83	Can change users menu	36	change_usersmenu
84	Can delete users menu	36	delete_usersmenu
85	Can add customers menu	37	add_customersmenu
86	Can change customers menu	37	change_customersmenu
87	Can delete customers menu	37	delete_customersmenu
88	Can add customer menu	38	add_customermenu
89	Can change customer menu	38	change_customermenu
90	Can delete customer menu	38	delete_customermenu
91	Can add user menu	40	add_usermenu
92	Can change user menu	40	change_usermenu
93	Can delete user menu	40	delete_usermenu
94	Can add source	42	add_source
95	Can change source	42	change_source
96	Can delete source	42	delete_source
97	Can add thumbnail	43	add_thumbnail
98	Can change thumbnail	43	change_thumbnail
99	Can delete thumbnail	43	delete_thumbnail
100	Can add thumbnail dimensions	44	add_thumbnaildimensions
101	Can change thumbnail dimensions	44	change_thumbnaildimensions
102	Can delete thumbnail dimensions	44	delete_thumbnaildimensions
103	Can add clipboard	45	add_clipboard
104	Can change clipboard	45	change_clipboard
105	Can delete clipboard	45	delete_clipboard
106	Can add clipboard item	46	add_clipboarditem
107	Can change clipboard item	46	change_clipboarditem
108	Can delete clipboard item	46	delete_clipboarditem
109	Can add file	47	add_file
110	Can change file	47	change_file
111	Can delete file	47	delete_file
112	Can add Folder	48	add_folder
113	Can change Folder	48	change_folder
114	Can delete Folder	48	delete_folder
115	Can use directory listing	48	can_use_directory_listing
116	Can add folder permission	49	add_folderpermission
117	Can change folder permission	49	change_folderpermission
118	Can delete folder permission	49	delete_folderpermission
119	Can add image	50	add_image
120	Can change image	50	change_image
121	Can delete image	50	delete_image
122	Can add thumbnail option	51	add_thumbnailoption
123	Can change thumbnail option	51	change_thumbnailoption
124	Can delete thumbnail option	51	delete_thumbnailoption
125	Can add delivery address	52	add_deliveryaddress
126	Can change delivery address	52	change_deliveryaddress
127	Can delete delivery address	52	delete_deliveryaddress
128	Can add payment cards	53	add_paymentcards
129	Can change payment cards	53	change_paymentcards
130	Can delete payment cards	53	delete_paymentcards
131	Can add static footer page	54	add_staticfooterpage
132	Can change static footer page	54	change_staticfooterpage
133	Can delete static footer page	54	delete_staticfooterpage
134	Can add paycom transaction	56	add_paycomtransaction
135	Can change paycom transaction	56	change_paycomtransaction
136	Can delete paycom transaction	56	delete_paycomtransaction
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 136, true);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2018-02-22 02:06:20.38367+05	1	998389478	2	[{"changed": {"fields": ["phone"]}}]	6	1
2	2018-02-23 00:49:58.337403+05	2	Водоэмульсионная краска	1	[{"added": {}}]	14	1
3	2018-02-23 00:50:56.10817+05	2	Vodoimulsiya kraska	2	[{"changed": {"fields": ["name", "slug"]}}]	14	1
4	2018-02-23 01:02:10.03188+05	3	Герметика и Монтаж пена	1	[{"added": {}}]	14	1
5	2018-02-23 01:02:24.951449+05	4	Грунтовка	1	[{"added": {}}]	14	1
6	2018-02-23 01:03:03.302834+05	5	Декоративная штукатура	1	[{"added": {}}]	14	1
7	2018-02-23 01:03:21.789414+05	6	Инструменты	1	[{"added": {}}]	14	1
8	2018-02-23 01:03:36.257601+05	7	Клеи	1	[{"added": {}}]	14	1
9	2018-02-23 01:03:46.952173+05	8	Колер	1	[{"added": {}}]	14	1
10	2018-02-23 01:04:07.230223+05	9	Сухие строй-смеси	1	[{"added": {}}]	14	1
11	2018-02-23 01:04:36.275896+05	10	Эмалевая краска и Лак	1	[{"added": {}}]	14	1
12	2018-02-23 01:05:07.921303+05	11	Внутренная	1	[{"added": {}}]	14	1
13	2018-02-23 01:05:29.352101+05	12	Премиум	1	[{"added": {}}]	14	1
14	2018-02-23 01:05:51.146993+05	13	Универсальная	1	[{"added": {}}]	14	1
15	2018-02-23 01:06:01.911498+05	14	Фасадная	1	[{"added": {}}]	14	1
16	2018-02-23 01:06:24.137805+05	15	Цветная	1	[{"added": {}}]	14	1
17	2018-02-23 01:08:28.416356+05	16	Внутренная	1	[{"added": {}}]	14	1
18	2018-02-23 01:08:43.751619+05	17	Премиум	1	[{"added": {}}]	14	1
19	2018-02-23 01:19:42.754808+05	1	Menu object	1	[{"added": {}}]	15	1
20	2018-02-23 01:20:46.101545+05	2	Оплата	1	[{"added": {}}]	15	1
21	2018-02-23 01:20:59.796596+05	3	Контакты	1	[{"added": {}}]	15	1
22	2018-02-23 01:21:15.193913+05	4	Премущества	1	[{"added": {}}]	15	1
23	2018-02-23 01:30:31.135794+05	1	Супер-прочные краски от "SICO"	1	[{"added": {}}]	17	1
24	2018-02-23 01:30:51.283106+05	2	Супер-прочные краски от "SICO"	1	[{"added": {}}]	17	1
25	2018-02-23 01:34:09.424736+05	1	Artens	1	[{"added": {}}]	19	1
26	2018-02-23 01:34:29.138584+05	2	LUXENS	1	[{"added": {}}]	19	1
27	2018-02-23 01:34:42.46066+05	3	Lexman	1	[{"added": {}}]	19	1
28	2018-02-23 01:35:00.864351+05	4	STERWINS	1	[{"added": {}}]	19	1
29	2018-02-23 02:17:37.130895+05	1	A'zam	2	[{"changed": {"fields": ["first_name", "last_name"]}}]	6	1
30	2018-02-27 19:09:05.722522+05	2	Water-based paint	2	[{"changed": {"fields": ["name", "slug"]}}]	14	1
31	2018-02-27 19:09:09.070796+05	4	STERWINS	2	[{"changed": {"fields": ["category"]}}]	19	1
32	2018-02-27 19:34:53.531314+05	5	test	1	[{"added": {}}]	19	1
33	2018-02-27 19:35:26.714771+05	6	test2	1	[{"added": {}}]	19	1
34	2018-02-27 19:36:49.027114+05	7	test3	1	[{"added": {}}]	19	1
35	2018-02-27 19:37:56.418972+05	8	test4	1	[{"added": {}}]	19	1
36	2018-02-27 19:38:25.900902+05	9	test5	1	[{"added": {}}]	19	1
37	2018-02-27 19:43:09.001742+05	10	test6	1	[{"added": {}}]	19	1
38	2018-02-27 19:43:22.62789+05	11	test7	1	[{"added": {}}]	19	1
39	2018-02-27 19:46:12.03526+05	12	test8	1	[{"added": {}}]	19	1
40	2018-02-27 19:46:27.323443+05	13	test9	1	[{"added": {}}]	19	1
41	2018-02-27 19:47:29.818372+05	14	test10	1	[{"added": {}}]	19	1
42	2018-02-27 19:48:26.398102+05	15	test11	1	[{"added": {}}]	19	1
43	2018-02-27 19:49:24.561436+05	16	test12	1	[{"added": {}}]	19	1
44	2018-02-27 19:49:47.716699+05	17	test13	1	[{"added": {}}]	19	1
45	2018-02-27 19:50:03.532096+05	18	test14	1	[{"added": {}}]	19	1
46	2018-02-27 19:50:21.767553+05	19	15	1	[{"added": {}}]	19	1
47	2018-02-27 19:52:43.16083+05	1	dota 2	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "qop"}}, {"added": {"name": "variation", "object": "wr"}}, {"added": {"name": "variation", "object": "warden"}}]	23	1
48	2018-02-27 19:54:35.017127+05	4	Benefits	2	[{"changed": {"fields": ["name", "slug"]}}]	15	1
49	2018-02-27 19:54:51.113515+05	4	Avfzalliklarimiz	2	[{"changed": {"fields": ["name", "slug"]}}]	15	1
50	2018-02-27 19:55:31.391045+05	2	deadmau5	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "midas's heel"}}, {"added": {"name": "variation", "object": "strobe"}}, {"added": {"name": "variation", "object": "clockwork"}}]	23	1
51	2018-02-27 23:50:56.217675+05	2	Super power	2	[{"changed": {"fields": ["name", "slug", "image"]}}]	17	1
52	2018-02-27 23:51:19.044698+05	2	Super mustahkam	2	[{"changed": {"fields": ["name", "slug", "image"]}}]	17	1
53	2018-02-28 00:04:31.267672+05	1	Доставка	1	[{"added": {}}]	26	1
54	2018-02-28 00:04:53.286292+05	2	Оплата	1	[{"added": {}}]	26	1
55	2018-02-28 00:05:08.589765+05	3	Контакты	1	[{"added": {}}]	26	1
56	2018-02-28 00:05:23.825602+05	4	Премущества	1	[{"added": {}}]	26	1
57	2018-02-28 00:08:46.59529+05	4	Preference	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
58	2018-02-28 00:09:30.545452+05	4	Benefits	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
59	2018-02-28 00:09:52.33979+05	4	Премущества	2	[]	15	1
60	2018-02-28 00:09:57.529773+05	4	Benefits	2	[]	15	1
61	2018-02-28 00:10:11.445205+05	3	Контакты	2	[]	15	1
62	2018-02-28 00:17:58.882693+05	3	Contact	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
63	2018-02-28 00:31:48.260238+05	3	aasasasas	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "5 litr"}}]	23	1
64	2018-03-01 00:32:19.227333+05	18	test14	2	[{"changed": {"fields": ["category"]}}]	19	1
65	2018-03-01 00:43:37.551288+05	1	dota 2	2	[{"changed": {"fields": ["volume"]}}, {"changed": {"name": "variation", "object": "9", "fields": ["name"]}}]	23	1
66	2018-03-01 00:44:15.813834+05	3	aasasasas	2	[{"changed": {"name": "variation", "object": "5", "fields": ["name"]}}]	23	1
67	2018-03-01 00:44:37.567354+05	2	deadmau5	2	[{"changed": {"fields": ["volume"]}}]	23	1
68	2018-03-01 12:27:15.437796+05	1	Красный	1	[{"added": {}}]	28	1
69	2018-03-01 12:27:21.872629+05	1	Red	2	[{"changed": {"fields": ["name"]}}]	28	1
70	2018-03-01 12:27:29.751764+05	1	Qizil	2	[{"changed": {"fields": ["name"]}}]	28	1
71	2018-03-01 12:36:32.743235+05	1	Qizil	2	[]	28	1
72	2018-03-01 12:36:53.027275+05	2	Yashil	1	[{"added": {}}]	28	1
73	2018-03-01 12:37:05.448547+05	2	Зеленый	2	[{"changed": {"fields": ["name"]}}]	28	1
74	2018-03-01 12:37:14.03593+05	2	Green	2	[{"changed": {"fields": ["name"]}}]	28	1
75	2018-03-01 15:12:41.142509+05	2	Зеленый	2	[{"changed": {"fields": ["color"]}}]	28	1
76	2018-03-01 15:12:47.182308+05	2	Green	2	[]	28	1
77	2018-03-01 15:26:09.779115+05	3	aasasasas	2	[{"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "Test var 1"}}, {"added": {"name": "Variation", "object": "Test var 2"}}, {"added": {"name": "Variation", "object": "Test var 3"}}]	23	1
78	2018-03-01 19:14:22.952465+05	3	aasasasas	2	[{"changed": {"name": "Variation", "object": "Test var 1", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "Test var 2", "fields": ["color"]}}]	23	1
79	2018-03-01 21:54:04.219674+05	3	aasasasas	2	[{"changed": {"name": "Variation", "object": "Test var 3", "fields": ["color"]}}]	23	1
80	2018-03-02 00:41:18.167515+05	18	Краска	1	[{"added": {}}]	14	1
81	2018-03-02 00:41:51.051387+05	19	Универсальная	1	[{"added": {}}]	14	1
82	2018-03-02 00:42:12.977476+05	20	Половая	1	[{"added": {}}]	14	1
83	2018-03-02 00:42:46.870359+05	21	Фасадная	1	[{"added": {}}]	14	1
84	2018-03-02 00:43:12.650837+05	19	15	3		19	1
85	2018-03-02 00:43:12.678879+05	18	test14	3		19	1
86	2018-03-02 00:43:12.689966+05	17	test13	3		19	1
87	2018-03-02 00:43:12.700895+05	16	test12	3		19	1
88	2018-03-02 00:43:12.712012+05	15	test11	3		19	1
89	2018-03-02 00:43:12.723085+05	14	test10	3		19	1
90	2018-03-02 00:43:12.734174+05	13	test9	3		19	1
91	2018-03-02 00:43:12.745173+05	12	test8	3		19	1
92	2018-03-02 00:43:12.756448+05	11	test7	3		19	1
93	2018-03-02 00:43:12.767561+05	10	test6	3		19	1
94	2018-03-02 00:43:12.778427+05	9	test5	3		19	1
95	2018-03-02 00:43:12.78988+05	8	test4	3		19	1
96	2018-03-02 00:43:12.800683+05	7	test3	3		19	1
97	2018-03-02 00:43:12.811664+05	6	test2	3		19	1
98	2018-03-02 00:43:12.82261+05	5	test	3		19	1
99	2018-03-02 00:43:12.834037+05	4	STERWINS	3		19	1
100	2018-03-02 00:43:12.844779+05	3	Lexman	3		19	1
101	2018-03-02 00:43:12.856029+05	2	LUXENS	3		19	1
102	2018-03-02 00:43:12.867089+05	1	Artens	3		19	1
103	2018-03-02 00:43:54.753628+05	20	Polard	1	[{"added": {}}]	19	1
104	2018-03-02 00:48:40.827196+05	3	Polard	1	[{"added": {}}]	6	1
105	2018-03-02 00:48:55.550082+05	1	None	1	[{"added": {}}]	21	1
106	2018-03-02 00:49:27.370185+05	4	Hayat	1	[{"added": {}}]	6	1
107	2018-03-02 00:49:33.350385+05	2	None	1	[{"added": {}}]	21	1
108	2018-03-02 00:57:14.722193+05	4	Econom 118 (белая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "2.9"}}]	23	1
109	2018-03-02 00:58:15.008161+05	5	Eko (половая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "2.9"}}]	23	1
110	2018-03-02 00:59:51.862106+05	6	FASAD+	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "20"}}]	23	1
111	2018-03-02 01:01:08.265537+05	6	FASAD+	2	[{"added": {"name": "Variation", "object": "10"}}, {"added": {"name": "Variation", "object": "4"}}]	23	1
112	2018-03-02 01:01:56.671527+05	21	Hayat	1	[{"added": {}}]	19	1
113	2018-03-02 01:02:05.973062+05	21	Hayat	2	[]	19	1
114	2018-03-02 01:04:50.306427+05	7	HAYAT ECO INTERIOR Краска для потолков	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "4.5"}}, {"added": {"name": "Variation", "object": "15"}}, {"added": {"name": "Variation", "object": "25"}}]	23	1
115	2018-03-02 01:06:11.29527+05	8	HAYAT ECO Эмаль Универсал (белая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "22"}}, {"added": {"name": "Variation", "object": "3"}}]	23	1
116	2018-03-02 01:06:47.031917+05	22	Пена	1	[{"added": {}}]	14	1
117	2018-03-02 01:08:49.919511+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "750"}}]	23	1
118	2018-03-02 01:09:35.306617+05	23	Краска-115	1	[{"added": {}}]	14	1
119	2018-03-02 01:11:08.486576+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "15"}}, {"added": {"name": "Variation", "object": "25"}}]	23	1
120	2018-03-02 04:13:52.956545+05	1	Кг	2	[{"changed": {"fields": ["name"]}}]	31	1
121	2018-03-02 04:14:01.613962+05	1	Kg	2	[{"changed": {"fields": ["name"]}}]	31	1
122	2018-03-02 04:14:08.147667+05	1	Kg	2	[{"changed": {"fields": ["name"]}}]	31	1
123	2018-03-02 05:13:44.027982+05	16	Test comment	2	[{"changed": {"fields": ["is_approved"]}}]	25	1
124	2018-03-02 19:08:10.163445+05	13	Универсальная	2	[{"changed": {"fields": ["slug"]}}]	14	1
125	2018-03-02 19:08:44.217557+05	21	Фасадная	2	[{"changed": {"fields": ["slug"]}}]	14	1
126	2018-03-02 19:09:16.594164+05	17	Премиум	2	[{"changed": {"fields": ["slug"]}}]	14	1
127	2018-03-02 19:09:39.789023+05	16	Внутренная	2	[{"changed": {"fields": ["slug"]}}]	14	1
128	2018-03-03 01:51:21.47614+05	5	1234	3		6	1
129	2018-03-03 02:05:33.477707+05	11	Maxamov	3		6	1
130	2018-03-03 02:05:33.502329+05	10	Maxamov	3		6	1
131	2018-03-03 02:05:33.513488+05	9	Maxam	3		6	1
132	2018-03-03 02:05:33.524669+05	7	Maxam	3		6	1
133	2018-03-03 02:05:33.538789+05	6	1234567	3		6	1
134	2018-03-03 18:29:55.875016+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["is_recommended"]}}]	23	1
135	2018-03-03 18:30:04.740763+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	2	[{"changed": {"fields": ["is_recommended"]}}]	23	1
136	2018-03-06 00:48:54.040924+05	5	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
137	2018-03-06 00:48:54.147845+05	4	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
138	2018-03-06 00:48:54.161554+05	3	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
139	2018-03-06 00:48:54.172533+05	2	wmi81g6ptm5h76z78cv9lgope4gf3i16	3		33	1
140	2018-03-06 09:49:49.063293+05	7	HAYAT ECO INTERIOR Краска для потолков	2	[{"changed": {"name": "Variation", "object": "4.5", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "15", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "25", "fields": ["color"]}}]	23	1
141	2018-03-06 22:28:47.011384+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[]	23	1
142	2018-03-07 13:25:15.691061+05	3	Order object	3		34	1
143	2018-03-07 13:25:15.720685+05	2	Order object	3		34	1
144	2018-03-07 13:25:15.731491+05	1	Order object	3		34	1
145	2018-03-07 17:06:42.846142+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[]	23	1
146	2018-03-07 17:07:00.391062+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"added": {"name": "Variation", "object": "36"}}]	23	1
147	2018-03-07 17:07:13.916164+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["characters"]}}]	23	1
148	2018-03-07 17:08:05.353234+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	2	[]	23	1
149	2018-03-07 17:08:08.642889+05	8	HAYAT ECO Эмаль Универсал (белая)	2	[]	23	1
150	2018-03-07 17:08:11.0227+05	7	HAYAT ECO INTERIOR Краска для потолков	2	[]	23	1
151	2018-03-07 17:08:13.734281+05	6	FASAD+	2	[]	23	1
152	2018-03-07 17:08:16.578308+05	5	Eko (половая)	2	[]	23	1
153	2018-03-07 17:08:20.30856+05	4	Econom 118 (белая)	2	[]	23	1
154	2018-03-07 17:11:00.802904+05	11	asasasasasas	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "Test"}}]	23	1
155	2018-03-07 17:17:41.575382+05	11	asasasasasas	2	[]	23	1
156	2018-03-07 17:21:39.740449+05	11	asasasasasas	2	[{"changed": {"name": "Variation", "object": "Test", "fields": ["price"]}}]	23	1
157	2018-03-07 17:22:25.304449+05	12	asaa121212	1	[{"added": {}}, {"added": {"name": "Variation", "object": "asasasas"}}]	23	1
158	2018-03-07 17:23:18.093873+05	12	asaa121212	2	[]	23	1
159	2018-03-07 17:24:30.295787+05	14	asasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "as121212"}}]	23	1
160	2018-03-07 17:25:04.968968+05	15	asasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "assssssssss"}}]	23	1
161	2018-03-07 17:32:08.608534+05	19	asaasasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "121212qawqw"}}]	23	1
162	2018-03-07 17:33:24.976059+05	19	asaasasas	3		23	1
163	2018-03-07 17:33:25.004815+05	15	asasas	3		23	1
164	2018-03-07 17:33:25.015416+05	14	asasas	3		23	1
165	2018-03-07 17:33:25.026502+05	12	asaa121212	3		23	1
166	2018-03-07 17:33:25.037721+05	11	asasasasasas	3		23	1
167	2018-03-07 17:34:40.65095+05	20	as112	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test 123"}}]	23	1
168	2018-03-07 17:35:33.185527+05	20	as112	3		23	1
169	2018-03-07 17:37:03.29771+05	22	Test 123	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test 123"}}]	23	1
170	2018-03-07 17:37:29.373083+05	22	Test 123	2	[]	23	1
171	2018-03-07 17:37:43.415345+05	22	Test 123	2	[{"changed": {"name": "Variation", "object": "Test 123", "fields": ["price"]}}]	23	1
172	2018-03-07 17:37:51.69806+05	22	Test 123	3		23	1
173	2018-03-07 17:38:21.347565+05	23	Test product	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test contact"}}]	23	1
174	2018-03-07 17:38:40.986194+05	23	Test product	2	[{"added": {"name": "Variation", "object": "Test contact 2"}}, {"changed": {"name": "Variation", "object": "Test contact", "fields": ["price"]}}]	23	1
175	2018-03-07 17:44:09.418117+05	23	Test product	3		23	1
176	2018-03-07 17:44:36.621369+05	24	Test product	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test var"}}]	23	1
177	2018-03-07 17:44:58.1312+05	24	Test product	2	[]	23	1
178	2018-03-07 17:46:24.407927+05	24	Test product	2	[]	23	1
179	2018-03-07 18:07:51.420632+05	24	Test product	2	[]	23	1
180	2018-03-07 18:08:01.131125+05	24	Test product	3		23	1
181	2018-03-07 18:08:24.956448+05	25	wwqsasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test name"}}]	23	1
182	2018-03-07 18:09:09.295574+05	25	wwqsasas	3		23	1
183	2018-03-07 18:50:23.351103+05	29	test	1	[{"added": {}}, {"added": {"name": "Variation", "object": "asasas"}}]	23	1
184	2018-03-07 18:50:31.305589+05	29	test	2	[]	23	1
185	2018-03-07 18:51:08.55972+05	29	test	2	[]	23	1
186	2018-03-07 18:51:17.65461+05	29	test	3		23	1
187	2018-03-07 18:51:45.403474+05	30	Presave	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Presave"}}]	23	1
188	2018-03-07 18:52:45.259905+05	30	Presave	3		23	1
189	2018-03-07 18:57:25.700883+05	31	Presave	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Tese"}}]	23	1
190	2018-03-07 18:59:55.757411+05	31	Presave	2	[]	23	1
191	2018-03-07 19:00:08.00257+05	31	Presave	2	[{"changed": {"name": "Variation", "object": "Tese", "fields": ["price"]}}]	23	1
192	2018-03-07 19:00:15.472712+05	31	Presave	3		23	1
193	2018-03-07 19:00:45.115121+05	32	Test pro	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test pro var 1"}}]	23	1
194	2018-03-07 19:01:07.731686+05	32	Test pro	2	[{"added": {"name": "Variation", "object": "Test pro var 2"}}]	23	1
195	2018-03-07 19:01:23.275781+05	32	Test pro	3		23	1
196	2018-03-07 19:02:03.285696+05	33	Test pro	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test pro var 1"}}, {"added": {"name": "Variation", "object": "Test pro var 2"}}]	23	1
197	2018-03-07 19:08:51.400756+05	33	Test pro	2	[{"changed": {"fields": ["price"]}}]	23	1
198	2018-03-07 19:35:47.282182+05	35	rwasasasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "ttttttttttttt"}}]	23	1
199	2018-03-07 19:35:54.975977+05	35	rwasasasas	3		23	1
200	2018-03-07 19:35:55.006203+05	33	Test pro	3		23	1
201	2018-03-07 19:36:20.903528+05	36	asasasasas	1	[{"added": {}}, {"added": {"name": "Variation", "object": "asaas"}}]	23	1
202	2018-03-07 19:36:27.793788+05	36	asasasasas	3		23	1
203	2018-03-07 19:37:49.513392+05	37	OOOO	1	[{"added": {}}, {"added": {"name": "Variation", "object": "Test name"}}, {"added": {"name": "Variation", "object": "Test name 2"}}]	23	1
204	2018-03-09 13:05:57.114055+05	37	OOOO	2	[{"changed": {"fields": ["is_top"]}}]	23	1
205	2018-03-09 13:06:04.681022+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[]	23	1
206	2018-03-09 13:16:36.124345+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["is_top"]}}]	23	1
207	2018-03-09 18:33:56.389407+05	1	None	1	[{"added": {}}]	20	1
208	2018-03-09 18:49:10.855805+05	9	Order object	3		34	1
209	2018-03-09 18:49:10.888734+05	8	Order object	3		34	1
210	2018-03-09 18:49:10.94412+05	7	Order object	3		34	1
211	2018-03-09 18:49:10.955011+05	6	Order object	3		34	1
212	2018-03-09 18:49:10.966201+05	5	Order object	3		34	1
213	2018-03-09 18:49:10.977281+05	4	Order object	3		34	1
214	2018-03-09 19:57:57.211968+05	12	Order object	2	[{"changed": {"fields": ["order_unique_id"]}}]	34	1
215	2018-03-10 19:56:01.62256+05	3	Синий	1	[{"added": {}}]	28	1
216	2018-03-10 19:56:03.953302+05	8	HAYAT ECO Эмаль Универсал (белая)	2	[{"changed": {"name": "Variation", "object": "22", "fields": ["color"]}}]	23	1
217	2018-03-22 00:43:15.742081+05	37	OOOO	2	update through import_export	23	1
218	2018-03-22 00:43:15.80785+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	update through import_export	23	1
219	2018-03-22 00:43:15.819078+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	2	update through import_export	23	1
220	2018-03-22 00:43:15.830172+05	8	HAYAT ECO Эмаль Универсал (белая)	2	update through import_export	23	1
221	2018-03-22 00:43:15.84116+05	7	HAYAT ECO INTERIOR Краска для потолков	2	update through import_export	23	1
222	2018-03-22 00:43:15.852355+05	6	FASAD+	2	update through import_export	23	1
223	2018-03-22 00:43:15.863522+05	5	Eko (половая)	2	update through import_export	23	1
224	2018-03-22 00:43:15.874482+05	4	Econom 118 (белая)	2	update through import_export	23	1
225	2018-03-26 04:52:11.366221+05	53	Eko (половая)	3		23	1
226	2018-03-26 04:52:11.420264+05	52	FASAD+	3		23	1
227	2018-03-26 04:52:11.431429+05	51	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
228	2018-03-26 04:52:11.442366+05	50	Eko (половая)	3		23	1
229	2018-03-26 04:52:11.453318+05	49	FASAD+	3		23	1
230	2018-03-26 04:52:11.464405+05	48	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
231	2018-03-26 04:52:11.475533+05	47	Eko (половая)	3		23	1
232	2018-03-26 04:52:11.486447+05	46	FASAD+	3		23	1
233	2018-03-26 04:52:11.497705+05	45	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
234	2018-03-26 04:52:11.508715+05	44	Eko (половая)	3		23	1
235	2018-03-26 04:52:11.519804+05	43	FASAD+	3		23	1
236	2018-03-26 04:52:11.530965+05	42	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
237	2018-03-26 04:52:11.542143+05	41	Eko (половая)	3		23	1
238	2018-03-26 04:52:11.553048+05	40	FASAD+	3		23	1
239	2018-03-26 04:52:11.563977+05	39	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
240	2018-03-26 14:15:41.941794+05	37	OOOO 222	2	[]	23	1
241	2018-03-26 14:22:29.658688+05	37	OOOO 222	2	[{"changed": {"fields": ["image_0", "image_1", "image_2"]}}]	23	1
242	2018-03-26 14:25:16.876941+05	37	OOOO 222	2	[{"changed": {"fields": ["image_0", "image_1", "image_2"]}}]	23	1
243	2018-03-26 15:02:16.853314+05	24	Цветная	1	[{"added": {}}]	14	1
244	2018-03-26 15:05:06.78146+05	4	белая	1	[{"added": {}}]	28	1
245	2018-03-26 15:05:07.099377+05	5	белая	1	[{"added": {}}]	28	1
246	2018-03-26 15:05:15.165725+05	4	белая	3		28	1
247	2018-03-26 15:05:30.0379+05	6	голубая	1	[{"added": {}}]	28	1
248	2018-03-26 15:05:44.525756+05	7	желтая	1	[{"added": {}}]	28	1
249	2018-03-26 15:05:57.910546+05	8	темно-зеленая	1	[{"added": {}}]	28	1
250	2018-03-26 15:06:23.646079+05	9	красно-коричневая	1	[{"added": {}}]	28	1
251	2018-03-26 15:06:35.516569+05	10	светло-серая	1	[{"added": {}}]	28	1
252	2018-03-26 15:06:46.474416+05	11	синяя	1	[{"added": {}}]	28	1
253	2018-03-26 15:06:46.82008+05	12	синяя	1	[{"added": {}}]	28	1
254	2018-03-26 15:06:54.138244+05	12	синяя	3		28	1
255	2018-03-26 15:07:10.700202+05	13	черная	1	[{"added": {}}]	28	1
256	2018-03-26 15:07:20.587277+05	14	светло-бежевая	1	[{"added": {}}]	28	1
257	2018-03-26 15:09:43.329792+05	11	синяя	3		28	1
258	2018-03-26 16:15:53.384966+05	89	Eko (половая)	3		23	1
259	2018-03-26 16:15:53.418181+05	88	FASAD+	3		23	1
260	2018-03-26 16:15:53.429206+05	87	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
261	2018-03-26 16:15:53.440239+05	86	Eko (половая)	3		23	1
262	2018-03-26 16:15:53.451577+05	85	FASAD+	3		23	1
263	2018-03-26 16:15:53.462522+05	84	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
264	2018-03-26 16:15:53.473637+05	83	Eko (половая)	3		23	1
265	2018-03-26 16:15:53.484562+05	82	FASAD+	3		23	1
266	2018-03-26 16:15:53.495511+05	81	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
267	2018-03-26 16:15:53.506758+05	80	Eko (половая)	3		23	1
268	2018-03-26 16:15:53.517951+05	79	FASAD+	3		23	1
269	2018-03-26 16:15:53.528886+05	78	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
270	2018-03-26 16:15:53.539969+05	77	Eko (половая)	3		23	1
271	2018-03-26 16:15:53.561952+05	76	FASAD+	3		23	1
272	2018-03-26 16:15:53.573215+05	75	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
273	2018-03-26 16:15:53.584219+05	74	Eko (половая)	3		23	1
274	2018-03-26 16:15:53.595167+05	73	FASAD+	3		23	1
275	2018-03-26 16:15:53.60646+05	72	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
276	2018-03-26 16:15:53.617515+05	71	Eko (половая)	3		23	1
277	2018-03-26 16:15:53.628693+05	70	Eko (половая)	3		23	1
278	2018-03-26 16:15:53.639647+05	69	FASAD+	3		23	1
279	2018-03-26 16:15:53.65093+05	68	FASAD+	3		23	1
280	2018-03-26 16:15:53.662346+05	67	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
281	2018-03-26 16:15:53.672384+05	66	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
282	2018-03-26 16:15:53.683942+05	65	Eko (половая)	3		23	1
283	2018-03-26 16:15:53.695194+05	64	FASAD+	3		23	1
284	2018-03-26 16:15:53.705905+05	63	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
285	2018-03-26 16:15:53.717307+05	62	Eko (половая)	3		23	1
286	2018-03-26 16:15:53.728472+05	61	FASAD+	3		23	1
287	2018-03-26 16:15:53.739435+05	60	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
288	2018-03-26 16:15:53.750226+05	59	Eko (половая)	3		23	1
289	2018-03-26 16:15:53.761584+05	58	FASAD+	3		23	1
290	2018-03-26 16:15:53.772695+05	57	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
291	2018-03-26 16:15:53.783735+05	56	Eko (половая)	3		23	1
292	2018-03-26 16:15:53.794791+05	55	FASAD+	3		23	1
293	2018-03-26 16:15:53.805981+05	54	HAYAT PREMIUM FASAD Краска для нар. работ силикон	3		23	1
294	2018-03-26 18:17:43.337391+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	3		23	1
295	2018-03-26 18:17:43.368163+05	8	HAYAT ECO Эмаль Универсал (белая)	3		23	1
296	2018-03-26 18:17:43.390018+05	7	HAYAT ECO INTERIOR Краска для потолков	3		23	1
297	2018-03-26 18:17:43.412255+05	6	FASAD+	3		23	1
298	2018-03-26 18:17:43.423323+05	5	Eko (половая)	3		23	1
299	2018-03-26 18:17:43.434066+05	4	Econom 118 (белая)	3		23	1
300	2018-03-26 18:18:24.365862+05	37	dnsdknskdjnsjlkdnsjdnsjlkd	2	[{"changed": {"name": "Variation", "object": "3", "fields": ["name"]}}, {"changed": {"name": "Variation", "object": "1", "fields": ["name"]}}, {"deleted": {"name": "Variation", "object": "Test name 33"}}, {"deleted": {"name": "Variation", "object": "4kg"}}, {"deleted": {"name": "Variation", "object": "4kg"}}, {"deleted": {"name": "Variation", "object": "1kg"}}, {"deleted": {"name": "Variation", "object": "4kg"}}, {"deleted": {"name": "Variation", "object": "3kg"}}]	23	1
301	2018-03-27 00:16:01.815166+05	37	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "3"}}]	23	1
302	2018-03-27 00:16:41.542997+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["image_0"]}}, {"deleted": {"name": "Variation", "object": "15"}}, {"deleted": {"name": "Variation", "object": "25"}}, {"deleted": {"name": "Variation", "object": "36"}}]	23	1
303	2018-03-27 00:25:18.827463+05	37	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "1"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "23"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "19"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "0.9"}}]	23	1
304	2018-03-27 00:25:29.259387+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "10"}}]	23	1
305	2018-03-27 00:28:49.787507+05	37	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "23"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "19"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "23"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "0.9"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "22"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "3"}}, {"deleted": {"name": "Variation", "object": "19"}}, {"deleted": {"name": "Variation", "object": "2.5"}}, {"deleted": {"name": "Variation", "object": "22"}}]	23	1
306	2018-03-27 00:31:20.74195+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	2	[{"changed": {"fields": ["description", "characters"]}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "10"}}, {"deleted": {"name": "Variation", "object": "20"}}, {"deleted": {"name": "Variation", "object": "10"}}]	23	1
307	2018-03-27 16:47:35.69946+05	90	HAYAT PREMIUM FASAD Краска для нар. работ силикон2-1212121	3		23	1
308	2018-03-29 02:08:42.99494+05	2	leones-fondos-de-pantalla-hd-Fotosdelanaturaleza-4-1024x640.jpg	2	[{"changed": {"fields": ["subject_location"]}}]	50	1
309	2018-03-29 02:12:19.29934+05	5	VGjc50U.jpg	3		50	1
310	2018-03-29 02:12:19.524916+05	4	lion.jpg	3		50	1
311	2018-03-29 02:12:19.646633+05	3	Screenshot from 2018-03-17 15-23-03.png	3		50	1
312	2018-03-29 02:12:19.901341+05	2	leones-fondos-de-pantalla-hd-Fotosdelanaturaleza-4-1024x640.jpg	3		50	1
313	2018-03-31 19:40:25.678835+05	92	Hello test product	3		23	1
314	2018-03-31 19:40:25.753317+05	91	Test - Hayat	3		23	1
315	2018-03-31 19:40:25.764253+05	37	HAYAT Эмаль ПФ-115	3		23	1
316	2018-03-31 19:40:25.775168+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	3		23	1
317	2018-03-31 19:46:42.981881+05	106	Test - Hayat	3		23	1
318	2018-03-31 19:46:43.018178+05	105	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	3		23	1
319	2018-03-31 19:46:43.029022+05	104	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	3		23	1
320	2018-03-31 19:46:43.040016+05	103	HAYAT Эмаль ПФ-115	3		23	1
321	2018-03-31 19:46:43.051232+05	102	HAYAT Эмаль ПФ-115	3		23	1
322	2018-03-31 19:46:43.062357+05	101	HAYAT Эмаль ПФ-115	3		23	1
323	2018-03-31 19:46:43.073487+05	100	HAYAT Эмаль ПФ-115	3		23	1
324	2018-03-31 19:46:43.084554+05	99	HAYAT Эмаль ПФ-115	3		23	1
325	2018-03-31 19:46:43.095434+05	98	HAYAT Эмаль ПФ-115	3		23	1
326	2018-03-31 19:46:43.106884+05	97	HAYAT Эмаль ПФ-115	3		23	1
327	2018-03-31 19:46:43.117618+05	96	HAYAT Эмаль ПФ-115	3		23	1
328	2018-03-31 19:46:43.128726+05	95	HAYAT Эмаль ПФ-115	3		23	1
329	2018-03-31 19:46:43.139825+05	94	HAYAT Эмаль ПФ-115	3		23	1
330	2018-03-31 19:46:43.151135+05	93	HAYAT Эмаль ПФ-115	3		23	1
331	2018-03-31 19:51:31.425496+05	107	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}]	23	1
332	2018-03-31 19:53:05.453114+05	109	Test - Hayat	3		23	1
333	2018-03-31 19:53:05.485601+05	108	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	3		23	1
334	2018-03-31 19:53:05.496706+05	107	HAYAT Эмаль ПФ-115	3		23	1
335	2018-03-31 19:53:52.87057+05	112	Test - Hayat	3		23	1
336	2018-03-31 19:53:52.89881+05	111	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	3		23	1
337	2018-03-31 19:53:52.909875+05	110	HAYAT Эмаль ПФ-115	3		23	1
338	2018-04-04 22:54:18.531657+05	15	Order object	3		34	1
339	2018-04-04 22:54:18.636354+05	14	Order object	3		34	1
340	2018-04-04 22:54:18.647466+05	13	Order object	3		34	1
341	2018-04-04 22:54:18.658679+05	12	Order object	3		34	1
342	2018-04-04 22:54:18.669718+05	11	Order object	3		34	1
343	2018-04-04 22:54:18.680505+05	10	Order object	3		34	1
344	2018-04-04 22:54:29.505046+05	110	533845b0-c715-4cd3-8ea0-20ba03e2b61e	3		33	1
345	2018-04-04 22:54:29.529269+05	109	28c52191-15b5-4142-a3be-ca90503d6969	3		33	1
346	2018-04-08 23:57:31.14685+05	4	Avfzalliklarimiz	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
347	2018-04-14 16:53:21.195088+05	113	HAYAT Эмаль ПФ-115	2	[{"changed": {"fields": ["description", "characters"]}}, {"changed": {"name": "Variation", "object": "3 \\u0442\\u0435\\u043c\\u043d\\u043e-\\u0437\\u0435\\u043b\\u0435\\u043d\\u0430\\u044f", "fields": ["quantity"]}}]	23	1
348	2018-04-14 17:42:39.822563+05	116	Test product	1	[{"added": {}}, {"added": {"name": "Variation", "object": "19"}}]	23	1
349	2018-04-14 17:42:53.183713+05	116	Test product	2	[{"added": {"name": "Variation", "object": "22"}}]	23	1
350	2018-04-14 18:17:58.601804+05	116	Test product	2	[{"changed": {"name": "Variation", "object": "22", "fields": ["quantity"]}}]	23	1
351	2018-04-16 23:12:19.336305+05	20	Polard	2	[{"changed": {"fields": ["category"]}}]	19	1
352	2018-04-23 20:03:24.766148+05	21	Hayat	2	[{"changed": {"fields": ["category"]}}]	19	1
353	2018-04-23 20:03:32.668188+05	20	Polard	2	[{"changed": {"fields": ["category"]}}]	19	1
354	2018-04-24 16:23:36.109723+05	21	Hayat	2	[{"changed": {"fields": ["category"]}}]	19	1
355	2018-04-24 16:23:43.871466+05	20	Polard	2	[{"changed": {"fields": ["category"]}}]	19	1
356	2018-04-26 14:20:36.451632+05	1	For clients	1	[{"added": {}}]	54	1
357	2018-04-26 14:23:51.731457+05	1	Для клиентов	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	54	1
358	2018-04-26 14:29:14.651039+05	2	Для партнеров	1	[{"added": {}}]	54	1
359	2018-04-26 14:30:14.700739+05	2	For partners	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	54	1
360	2018-04-26 17:10:59.865218+05	2	Hamkorlar	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	54	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 360, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	users	user
7	users	category
8	products	categorytree
9	users	categories
10	users	categoriestranslation
11	products	categoriestranslation
12	products	categories
13	products	categorytranslation
14	products	category
15	main	menu
16	main	menutranslation
17	main	banner
18	main	bannertranslation
19	products	brands
20	users	client
21	users	merchant
22	products	variation
23	products	product
24	products	productimage
25	products	review
26	main	static
27	main	statictranslation
28	products	color
29	products	productcolor
30	products	colortranslation
31	products	volumetype
32	products	volumetypetranslation
33	orders	cart
34	orders	order
35	users	files
36	main	usersmenu
37	main	customersmenu
38	main	customermenu
39	main	customermenutranslation
40	main	usermenu
41	main	usermenutranslation
42	easy_thumbnails	source
43	easy_thumbnails	thumbnail
44	easy_thumbnails	thumbnaildimensions
45	filer	clipboard
46	filer	clipboarditem
47	filer	file
48	filer	folder
49	filer	folderpermission
50	filer	image
51	filer	thumbnailoption
52	users	deliveryaddress
53	users	paymentcards
54	main	staticfooterpage
55	main	staticfooterpagetranslation
56	payment	paycomtransaction
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 56, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2018-02-14 01:14:58.850219+05
2	contenttypes	0002_remove_content_type_name	2018-02-14 01:14:58.938906+05
3	auth	0001_initial	2018-02-14 01:14:59.649186+05
4	auth	0002_alter_permission_name_max_length	2018-02-14 01:14:59.680378+05
5	auth	0003_alter_user_email_max_length	2018-02-14 01:14:59.708635+05
6	auth	0004_alter_user_username_opts	2018-02-14 01:14:59.743361+05
7	auth	0005_alter_user_last_login_null	2018-02-14 01:14:59.77669+05
8	auth	0006_require_contenttypes_0002	2018-02-14 01:14:59.792122+05
9	auth	0007_alter_validators_add_error_messages	2018-02-14 01:14:59.820154+05
10	auth	0008_alter_user_username_max_length	2018-02-14 01:14:59.853005+05
11	users	0001_initial	2018-02-14 01:15:00.392038+05
12	admin	0001_initial	2018-02-14 01:15:00.648793+05
13	admin	0002_logentry_remove_auto_add	2018-02-14 01:15:00.691949+05
14	sessions	0001_initial	2018-02-14 01:15:00.892632+05
15	users	0002_auto_20180131_1203	2018-02-14 01:15:00.927092+05
16	users	0003_auto_20180131_1206	2018-02-14 01:15:00.980546+05
17	users	0004_auto_20180205_1214	2018-02-14 01:15:01.191497+05
18	users	0005_category	2018-02-14 01:15:01.590694+05
19	users	0006_category_is_top	2018-02-14 01:22:03.269973+05
20	users	0007_auto_20180222_1029	2018-02-22 15:29:51.05192+05
21	users	0008_auto_20180222_1857	2018-02-22 23:57:20.921411+05
22	products	0001_initial	2018-02-23 00:01:19.138857+05
23	products	0002_auto_20180222_1947	2018-02-23 00:47:49.435891+05
24	users	0009_auto_20180222_1947	2018-02-23 00:47:49.644082+05
25	products	0003_auto_20180222_1949	2018-02-23 00:49:27.942581+05
26	main	0001_initial	2018-02-23 01:12:34.357276+05
27	main	0002_menu_extra_attrs	2018-02-23 01:16:07.848813+05
28	main	0003_remove_menu_extra_attrs	2018-02-23 01:18:27.811963+05
29	main	0004_auto_20180222_2026	2018-02-23 01:27:05.881903+05
30	products	0004_brands	2018-02-23 01:27:05.982353+05
31	products	0005_auto_20180222_2032	2018-02-23 01:32:30.771728+05
32	products	0006_product_variation	2018-02-23 02:04:19.576038+05
33	users	0010_client_merchant	2018-02-23 02:04:19.886099+05
34	users	0011_remove_user_user_type	2018-02-23 02:16:03.903654+05
35	main	0005_auto_20180222_2133	2018-02-23 02:33:20.447952+05
36	products	0007_auto_20180222_2133	2018-02-23 02:33:21.129281+05
37	users	0012_auto_20180222_2133	2018-02-23 02:33:21.371609+05
38	products	0008_auto_20180222_2137	2018-02-23 02:37:08.688222+05
39	products	0009_auto_20180222_2153	2018-02-23 02:53:16.152403+05
40	products	0010_auto_20180224_1001	2018-02-24 15:01:22.570806+05
41	products	0011_variation_color	2018-02-24 15:06:41.999214+05
42	products	0012_auto_20180224_1009	2018-02-24 15:09:16.168202+05
43	products	0013_brands_category	2018-02-27 18:53:12.324191+05
44	products	0014_auto_20180227_1403	2018-02-27 19:03:27.617272+05
45	products	0015_auto_20180227_1408	2018-02-27 19:08:06.459309+05
46	main	0006_auto_20180227_1901	2018-02-28 00:01:53.381182+05
47	main	0007_auto_20180227_1903	2018-02-28 00:03:50.772608+05
48	products	0016_auto_20180301_0702	2018-03-01 12:12:19.188591+05
49	products	0017_remove_variation_color	2018-03-01 12:12:19.33348+05
50	products	0018_variation_color	2018-03-01 12:12:19.455118+05
51	products	0019_remove_color_name	2018-03-01 12:16:30.866471+05
52	products	0020_auto_20180301_0722	2018-03-01 12:22:24.256942+05
53	products	0021_auto_20180301_0723	2018-03-01 12:23:03.999676+05
54	products	0022_auto_20180301_0726	2018-03-01 12:26:23.216134+05
55	products	0023_auto_20180301_1658	2018-03-01 21:58:51.392816+05
56	products	0024_product_available_in_stock	2018-03-02 00:26:17.156423+05
57	products	0025_auto_20180301_1946	2018-03-02 00:46:35.087206+05
58	products	0026_auto_20180301_2256	2018-03-02 03:56:06.390639+05
59	products	0027_auto_20180301_2256	2018-03-02 04:11:17.241546+05
60	products	0028_auto_20180301_2259	2018-03-02 04:11:17.418572+05
61	products	0029_remove_product_volume	2018-03-02 04:11:17.607072+05
62	products	0030_product_volume	2018-03-02 04:11:17.717652+05
63	products	0031_auto_20180301_2307	2018-03-02 04:11:17.838639+05
64	products	0032_auto_20180301_2311	2018-03-02 04:12:00.411693+05
65	products	0033_product_is_recommended	2018-03-02 04:18:51.124964+05
66	products	0034_auto_20180301_2331	2018-03-02 04:31:11.641572+05
67	products	0035_auto_20180301_2332	2018-03-02 04:32:54.647829+05
68	products	0036_auto_20180301_2339	2018-03-02 04:39:23.192744+05
69	products	0037_auto_20180301_2339	2018-03-02 04:40:01.416594+05
70	products	0038_auto_20180302_1907	2018-03-02 19:09:45.279595+05
71	users	0013_auto_20180303_0156	2018-03-03 01:56:37.455328+05
72	orders	0001_initial	2018-03-05 18:54:01.936428+05
73	users	0014_auto_20180305_1853	2018-03-05 18:54:02.019885+05
74	orders	0002_auto_20180305_1856	2018-03-05 18:56:24.400875+05
75	orders	0003_auto_20180305_2302	2018-03-05 23:02:51.507234+05
76	orders	0004_auto_20180305_2330	2018-03-05 23:30:25.922418+05
77	orders	0005_auto_20180307_1253	2018-03-07 12:53:39.00464+05
78	orders	0006_auto_20180307_1254	2018-03-07 12:54:38.105254+05
79	orders	0007_auto_20180307_1256	2018-03-07 12:56:08.110165+05
80	orders	0008_auto_20180307_1300	2018-03-07 13:00:17.668257+05
81	products	0039_product_price	2018-03-07 17:01:34.412259+05
82	orders	0009_auto_20180307_2057	2018-03-07 20:57:56.422378+05
83	products	0040_auto_20180307_2057	2018-03-07 20:57:57.26965+05
84	products	0041_product_is_top	2018-03-09 12:44:44.81721+05
85	orders	0010_order_unique_id	2018-03-09 18:41:41.578709+05
86	orders	0011_auto_20180309_1842	2018-03-09 18:42:23.732093+05
87	orders	0012_auto_20180309_1850	2018-03-09 18:50:51.307983+05
88	orders	0013_auto_20180309_1955	2018-03-09 19:55:52.912981+05
89	orders	0014_auto_20180309_2014	2018-03-09 20:14:20.916703+05
90	users	0015_auto_20180309_2014	2018-03-09 20:14:21.346204+05
91	users	0016_auto_20180309_2015	2018-03-09 20:15:17.241212+05
92	users	0017_auto_20180309_2027	2018-03-09 20:27:17.104962+05
93	users	0018_auto_20180309_2040	2018-03-09 20:40:14.611264+05
94	main	0008_customersmenu_usersmenu	2018-03-10 17:26:39.299757+05
95	main	0008_auto_20180310_1732	2018-03-10 17:32:43.498415+05
96	products	0042_auto_20180324_0027	2018-03-24 00:27:34.999416+05
97	products	0043_auto_20180326_0433	2018-03-26 04:33:08.505514+05
98	products	0044_auto_20180326_1355	2018-03-26 13:55:23.503811+05
99	products	0045_auto_20180326_1400	2018-03-26 14:03:46.038576+05
100	products	0046_auto_20180326_1403	2018-03-26 14:03:46.165992+05
101	products	0047_auto_20180326_1415	2018-03-26 14:15:20.893332+05
102	easy_thumbnails	0001_initial	2018-03-28 23:36:20.210945+05
103	easy_thumbnails	0002_thumbnaildimensions	2018-03-28 23:36:20.40994+05
104	filer	0001_initial	2018-03-28 23:36:22.25121+05
105	filer	0002_auto_20150606_2003	2018-03-28 23:36:22.604861+05
106	filer	0003_thumbnailoption	2018-03-28 23:36:22.727131+05
107	filer	0004_auto_20160328_1434	2018-03-28 23:36:22.815194+05
108	filer	0005_auto_20160623_1425	2018-03-28 23:36:23.025415+05
109	filer	0006_auto_20160623_1627	2018-03-28 23:36:23.114316+05
110	filer	0007_auto_20161016_1055	2018-03-28 23:36:23.168867+05
111	users	0019_auto_20180404_2305	2018-04-04 23:05:07.926652+05
112	users	0020_auto_20180404_2317	2018-04-04 23:17:22.435637+05
113	users	0021_auto_20180404_2318	2018-04-04 23:18:15.895785+05
114	users	0022_deliveryaddress_user	2018-04-04 23:21:30.951431+05
115	users	0023_auto_20180407_1825	2018-04-07 18:28:49.916044+05
116	users	0024_paymentcards	2018-04-08 15:29:57.030827+05
117	users	0025_auto_20180408_1559	2018-04-08 16:00:02.36095+05
118	users	0026_auto_20180413_1212	2018-04-13 12:12:53.89399+05
119	users	0027_auto_20180413_1436	2018-04-13 14:36:29.625676+05
120	users	0028_auto_20180413_1529	2018-04-13 15:29:26.780264+05
121	users	0029_auto_20180418_1245	2018-04-18 12:45:42.752802+05
122	filer	0008_auto_20171117_1313	2018-04-18 12:47:07.574269+05
123	filer	0009_auto_20171220_1635	2018-04-18 12:47:08.2052+05
124	filer	0010_auto_20180414_2058	2018-04-18 12:47:08.663343+05
125	users	0030_auto_20180418_1613	2018-04-18 16:13:53.054055+05
126	main	0009_auto_20180424_1632	2018-04-24 16:33:26.963564+05
127	orders	0015_auto_20180424_1630	2018-04-24 16:33:27.060722+05
128	users	0031_auto_20180424_1630	2018-04-24 16:33:27.341153+05
129	users	0032_auto_20180424_1632	2018-04-24 16:33:27.396114+05
130	users	0033_auto_20180424_1702	2018-04-24 17:02:17.751451+05
131	main	0010_auto_20180424_1702	2018-04-24 17:02:47.550275+05
132	users	0034_auto_20180424_1702	2018-04-24 17:02:47.648568+05
133	users	0035_auto_20180424_1742	2018-04-24 17:42:27.433193+05
134	main	0011_auto_20180424_1756	2018-04-24 17:56:42.120571+05
135	users	0036_auto_20180424_1756	2018-04-24 17:56:42.233406+05
136	users	0037_auto_20180424_1802	2018-04-24 18:02:44.751815+05
137	orders	0016_order_products	2018-04-24 18:52:04.094829+05
138	users	0038_auto_20180424_1851	2018-04-24 18:52:04.260482+05
139	users	0039_auto_20180424_1854	2018-04-24 18:54:15.658348+05
140	users	0040_auto_20180424_1854	2018-04-24 18:54:26.839772+05
141	users	0038_auto_20180424_1907	2018-04-24 19:07:19.877567+05
142	users	0039_auto_20180424_1907	2018-04-24 19:07:52.39913+05
143	main	0012_auto_20180426_1409	2018-04-26 14:09:46.350167+05
144	main	0013_auto_20180426_1411	2018-04-26 14:11:37.229198+05
145	main	0014_auto_20180426_1413	2018-04-26 14:13:29.571855+05
146	main	0015_auto_20180426_1414	2018-04-26 14:14:11.244604+05
147	main	0016_auto_20180426_1415	2018-04-26 14:15:31.052725+05
148	main	0017_auto_20180426_1416	2018-04-26 14:16:56.367245+05
149	payment	0001_initial	2018-04-26 16:55:11.036347+05
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 149, true);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
oxr7hxshvn5rov26rbllhnrbfmk7cev0	MTM4NjVlM2IwNDBjZmEzYWE1NzY0MzM2NDU1NzZlYjYwMGYxZDhlYzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkMjY5MGZlMGIwYTRlYWZmMTYyNDAxZjkzNjg3Y2IyMWMyZGM2OTNiIn0=	2018-02-28 01:25:35.034684+05
a7k6adi6ac6uaroshpqlho0nsgfgsvbw	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-08 02:06:03.175184+05
fii5m7pfwnufcjmwokikupas5atuph1n	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-08 23:49:57.589949+05
pmyvcaswpzudfbhfluu7godte38nd0xm	Njc5ZTM2YTdhYTlhMjA2MWVmYmViOTk0YzQzOTcwY2Y1N2VjY2Y1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIiwicHJvZHVjdCI6MSwiY2FydCI6W3sidmFyaWF0aW9uX2lkIjozMSwicXVhbnRpdHkiOjMzLCJjbGllbnRfaWQiOjYxfV19	2018-03-17 04:30:55.245876+05
rqfy0lmhb9qbjbldbv3dnwt4nbcf12gv	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-17 18:29:41.482416+05
j6d0avxuyd1srfxn3sje2snh9bnptps5	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-19 18:54:58.878801+05
4iu00yw2lrnim6pkigg6tjt0fsxmjf9k	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-10 15:11:26.529502+05
ph7k9stmci6jm21pit2z8jf118615zdx	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-24 19:40:02.170547+05
8lcc9cggor490024cxu5583oznwbba4w	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 02:03:55.661669+05
fn83rfywoosoigchyjasu3ptmye13qnc	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:09:16.816111+05
85zfbwxcuisq5eiv3yyz4x5qfh5f5wht	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 14:02:21.272557+05
7h90470ak4onkee7z2kfdz7zkwmktych	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 19:28:32.933524+05
adafhbo47pytykclgjcxyl9nlod1e9qs	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:10:25.06447+05
fxlv414wmgvpfp59xwwxthtd6fpc52pf	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-15 19:13:58.131918+05
ifs8nap5g136s7hpbcxvbicf58cv44hx	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-27 17:50:28.659678+05
an50alff4av105k510p35l8fcpyqsonr	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-16 00:35:30.702356+05
ulx52uwqqevs6mhe4is82ooa289hbr2r	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:11:26.118656+05
0ojja4dem35vg2r05weed8gu873b6m27	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:12:19.56923+05
6v972odpda9te75hfuzjdkf63e1zo7ly	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-05 00:28:08.611685+05
4wwqpr8g1oxobjppl7879xnoy0gq2g04	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:14:16.235394+05
db7y9nzd5h3rcne362m4qsrsdo9jnje1	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:15:35.933555+05
9lkgq1yigutrhl9ci782imfmago3lh6z	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-09 03:45:59.507688+05
vjvr8v9715ko8r39jubga2grbv01ptm6	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:16:37.320762+05
b9dk23ju7292i9crwq4x2pk5aag9bjk8	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-19 23:16:52.420859+05
z74wy0cnqh38bowdnst3l7hp8dvz322q	ODY3Mjc2NmFkZGJhODQ0MmY4YTM1ZDAxN2Q0NmEwMTc4MTg1YTA1Yjp7fQ==	2018-03-21 11:38:18.126871+05
mhhl87v8svg4xnqune1mlvewy8mqfgi1	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-21 20:42:13.699247+05
uwwezzwg00rkm5p3haxyfanhtp5t5av7	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-23 19:07:52.007988+05
pu7mikv122n9jfol6qokyfi2qm1uaje8	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-23 19:34:29.104381+05
un17w1zye2l6l0kfnb7dfqaz07w2172r	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-18 19:13:05.274493+05
6qpa6mivvv4s1lynjo4hvgte9s1mvt7y	M2RkMmM1OTYxZWZlMzk4NjZkNGViY2I3NjA4ODY3M2QwYWYwMDdhMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNTM2YzAyNDA0MDAyYmVlNDBhNGVmZGM3YmE0Y2NkMmQxZTQxNWNlIn0=	2018-05-08 18:43:31.241782+05
6x4qbzl1rvfecf9e3xcli1vg54n8abul	MTNmMWRmZjM2ZWMzMzY1OGNiMTA1ZjljNTYwY2Q1MDcwOTVhMGI1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIiwiZmlsZXJfbGFzdF9mb2xkZXJfaWQiOiIxIn0=	2018-04-12 16:08:46.701155+05
fguegismwqxaznsu3t4zn1on1bc038tj	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-14 19:37:27.064021+05
z50oi48hmknobeec85pnqpcec4tm2u0b	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-18 22:57:01.077854+05
1eyj6o2w7h6cz3eilr9rd15lj58nwikl	NDdlMjVlYjY2MmJmYjcwZWZjMDA1YmU3YmFkZjdlNGFjZjg3ZDI5OTp7Il9hdXRoX3VzZXJfaWQiOiIyMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMjkyODIyNjM5MTYzMTMzZjIyNTc3MzUxNDE0OTk4ZGM1NTdkMGJjOSJ9	2018-04-23 17:21:02.54425+05
ce9l4cnpuofmm0972my7pa0krslh2jft	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-25 02:51:05.912262+05
peg8hid9w6nxgcd0fjxqae6evt0x9qbq	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-25 14:24:07.045408+05
ovbjo0yhr1fvwy6hlx427flpx45hyjqa	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-27 18:24:31.381813+05
n7nidqltmk2f13p7zdmnsqjab0ij61h6	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-28 16:52:55.657989+05
vi6nrioprfk7yif2p2il59xil4lkkg7d	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-30 22:58:59.46094+05
ht946gt01l32lr7edhc54tv55t3womqz	M2RkMmM1OTYxZWZlMzk4NjZkNGViY2I3NjA4ODY3M2QwYWYwMDdhMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNTM2YzAyNDA0MDAyYmVlNDBhNGVmZGM3YmE0Y2NkMmQxZTQxNWNlIn0=	2018-05-10 13:58:19.529695+05
zol08nxcyh5zh58pjrlt6ksp4362whjt	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-05-02 19:52:03.347213+05
4czgfc1tjp7f0cedg4wipsdqi4q97e2s	M2RkMmM1OTYxZWZlMzk4NjZkNGViY2I3NjA4ODY3M2QwYWYwMDdhMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNTM2YzAyNDA0MDAyYmVlNDBhNGVmZGM3YmE0Y2NkMmQxZTQxNWNlIn0=	2018-05-10 16:27:22.63358+05
chych1c7cqacn38zr06bw2kwdr13ncuy	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-04-20 16:34:33.039439+05
zo0u2xk28skz92vhcjwp7v9yv85wijng	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-27 06:56:27.220043+05
od4e6ok9difor38ua7h2ur99z58zrc2c	ODI5MWE5Mzg3ODA2ZWM3YmFhYmQ2NjI0NzQwMGVkMjEzMGYxYzY1YTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkZmU4NjBmNGZlMDcxZjU5NjZjZTIwODYyZmI0MzMzY2I1NDU0NDkyIn0=	2018-05-07 20:44:18.270598+05
e11zz4n7ovdcuf341pe0adyiwskw79zw	ODI5MWE5Mzg3ODA2ZWM3YmFhYmQ2NjI0NzQwMGVkMjEzMGYxYzY1YTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkZmU4NjBmNGZlMDcxZjU5NjZjZTIwODYyZmI0MzMzY2I1NDU0NDkyIn0=	2018-05-08 16:12:24.009969+05
exh3kotubsokgpvl4wtj67ivg5ysr9bv	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-21 18:43:14.85056+05
zvkbaxhr02584cfb3oxomoniuadr444b	MWQwMjZkMmE1ZjE2NzVjNzIxYjBlZDBiNmE1YjY3YmQyOTMxMmJiMzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIyNDNjYjUzODE2ZWNkZGM0Y2RiMmY5ZDljNjU3N2U2MTY5ODkwYTU5In0=	2018-04-21 19:32:13.291068+05
\.


--
-- Data for Name: easy_thumbnails_source; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.easy_thumbnails_source (id, storage_hash, name, modified) FROM stdin;
1	f9bde26a1556cd667f742bd34ec7c55e	filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png	2018-03-29 02:06:38.495586+05
6	52617e6399d6f38ea9cbf527bf430616	filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png	2018-03-29 16:08:46.025578+05
\.


--
-- Name: easy_thumbnails_source_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.easy_thumbnails_source_id_seq', 6, true);


--
-- Data for Name: easy_thumbnails_thumbnail; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.easy_thumbnails_thumbnail (id, storage_hash, name, modified, source_id) FROM stdin;
1	f9bde26a1556cd667f742bd34ec7c55e	filer_public_thumbnails/filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png__16x16_q85_crop_subsampling-2_upscale.png	2018-03-29 02:06:38.523567+05	1
2	f9bde26a1556cd667f742bd34ec7c55e	filer_public_thumbnails/filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png__32x32_q85_crop_subsampling-2_upscale.png	2018-03-29 02:06:38.572335+05	1
3	f9bde26a1556cd667f742bd34ec7c55e	filer_public_thumbnails/filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png__48x48_q85_crop_subsampling-2_upscale.png	2018-03-29 02:06:38.605381+05	1
4	f9bde26a1556cd667f742bd34ec7c55e	filer_public_thumbnails/filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png__64x64_q85_crop_subsampling-2_upscale.png	2018-03-29 02:06:38.651922+05	1
5	f9bde26a1556cd667f742bd34ec7c55e	filer_public_thumbnails/filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png__180x180_q85_crop_subsampling-2_upscale.png	2018-03-29 02:06:38.724787+05	1
32	52617e6399d6f38ea9cbf527bf430616	filer_public_thumbnails/filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png__16x16_q85_crop_subsampling-2_upscale.png	2018-03-29 16:08:46.087681+05	6
33	52617e6399d6f38ea9cbf527bf430616	filer_public_thumbnails/filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png__32x32_q85_crop_subsampling-2_upscale.png	2018-03-29 16:08:46.179535+05	6
34	52617e6399d6f38ea9cbf527bf430616	filer_public_thumbnails/filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png__48x48_q85_crop_subsampling-2_upscale.png	2018-03-29 16:08:46.236169+05	6
35	52617e6399d6f38ea9cbf527bf430616	filer_public_thumbnails/filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png__64x64_q85_crop_subsampling-2_upscale.png	2018-03-29 16:08:46.269062+05	6
36	52617e6399d6f38ea9cbf527bf430616	filer_public_thumbnails/filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png__180x180_q85_crop_subsampling-2_upscale.png	2018-03-29 16:08:46.322964+05	6
\.


--
-- Name: easy_thumbnails_thumbnail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.easy_thumbnails_thumbnail_id_seq', 36, true);


--
-- Data for Name: easy_thumbnails_thumbnaildimensions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.easy_thumbnails_thumbnaildimensions (id, thumbnail_id, width, height) FROM stdin;
\.


--
-- Name: easy_thumbnails_thumbnaildimensions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.easy_thumbnails_thumbnaildimensions_id_seq', 1, false);


--
-- Data for Name: filer_clipboard; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_clipboard (id, user_id) FROM stdin;
1	1
\.


--
-- Name: filer_clipboard_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.filer_clipboard_id_seq', 1, true);


--
-- Data for Name: filer_clipboarditem; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_clipboarditem (id, clipboard_id, file_id) FROM stdin;
\.


--
-- Name: filer_clipboarditem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.filer_clipboarditem_id_seq', 1, false);


--
-- Data for Name: filer_file; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_file (id, file, _file_size, sha1, has_all_mandatory_data, original_filename, name, description, uploaded_at, modified_at, is_public, folder_id, owner_id, polymorphic_ctype_id) FROM stdin;
1	filer_public/85/e3/85e3d702-cc48-4921-969e-ac80ae3d8b02/maps.png	9279	20042fc4955052ed6eaa4bd2c1bd2c0c08c14533	f	maps.png		\N	2018-03-29 02:06:38.360508+05	2018-03-29 02:06:38.3606+05	t	\N	1	50
6	filer_public/f1/e9/f1e9918d-1517-4c00-9cbf-8a06937d9358/screenshot_from_2018-03-28_23-04-22.png	26495	956e5ff1edc9657910b3e4e7a8ce0e128a480d90	f	Screenshot from 2018-03-28 23-04-22.png		\N	2018-03-29 16:08:45.93756+05	2018-03-29 16:08:45.937652+05	t	1	1	50
\.


--
-- Name: filer_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.filer_file_id_seq', 6, true);


--
-- Data for Name: filer_folder; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_folder (id, name, uploaded_at, created_at, modified_at, lft, rght, tree_id, level, owner_id, parent_id) FROM stdin;
1	products	2018-03-29 02:06:59.976683+05	2018-03-29 02:06:59.976769+05	2018-03-29 02:06:59.976826+05	1	2	1	0	1	\N
\.


--
-- Name: filer_folder_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.filer_folder_id_seq', 1, true);


--
-- Data for Name: filer_folderpermission; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_folderpermission (id, type, everybody, can_edit, can_read, can_add_children, folder_id, group_id, user_id) FROM stdin;
\.


--
-- Name: filer_folderpermission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.filer_folderpermission_id_seq', 1, false);


--
-- Data for Name: filer_image; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_image (file_ptr_id, _height, _width, date_taken, default_alt_text, default_caption, author, must_always_publish_author_credit, must_always_publish_copyright, subject_location) FROM stdin;
1	256	256	2018-03-29 02:06:38.243514+05	\N	\N	\N	f	f	
6	157	277	2018-03-29 16:08:45.775719+05	\N	\N	\N	f	f	
\.


--
-- Data for Name: filer_thumbnailoption; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.filer_thumbnailoption (id, name, width, height, crop, upscale) FROM stdin;
\.


--
-- Name: filer_thumbnailoption_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.filer_thumbnailoption_id_seq', 1, false);


--
-- Data for Name: main_banner; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_banner (id, "order") FROM stdin;
1	0
2	0
\.


--
-- Name: main_banner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_banner_id_seq', 2, true);


--
-- Data for Name: main_banner_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_banner_translation (id, language_code, name, slug, image, master_id) FROM stdin;
1	ru	Супер-прочные краски от "SICO"	super-prochnye-kraski-ot-sico	banners/2018/02/22/lion.jpg	1
2	ru	Супер-прочные краски от "SICO"	super-prochnye-kraski-ot-sico2	banners/2018/02/22/hmk1.jpg	2
3	en	Super power	super-power	banners/2018/02/27/hmk1.jpg	2
4	uz	Super mustahkam	super-mustahkam	banners/2018/02/27/hmk1_iaKshUz.jpg	2
\.


--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_banner_translation_id_seq', 4, true);


--
-- Data for Name: main_customermenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_customermenu (id, "order") FROM stdin;
\.


--
-- Name: main_customermenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_customermenu_id_seq', 1, false);


--
-- Data for Name: main_customermenu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_customermenu_translation (id, language_code, name, slug, master_id) FROM stdin;
\.


--
-- Name: main_customermenu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_customermenu_translation_id_seq', 1, false);


--
-- Data for Name: main_customersmenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_customersmenu (menu_ptr_id) FROM stdin;
\.


--
-- Data for Name: main_menu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_menu (id, "order") FROM stdin;
1	0
2	0
4	0
3	0
\.


--
-- Name: main_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_menu_id_seq', 4, true);


--
-- Data for Name: main_menu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_menu_translation (id, language_code, name, slug, master_id) FROM stdin;
1	ru	Доставка	dostavka	1
2	ru	Оплата	oplata	2
3	ru	Контакты	kontakty	3
4	ru	Премущества	premushestva	4
5	en	Benefits	benefits	4
6	uz	Avfzalliklarimiz	avfzalliklarimiz	4
\.


--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_menu_translation_id_seq', 6, true);


--
-- Data for Name: main_static; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_static (id) FROM stdin;
1
2
3
4
\.


--
-- Name: main_static_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_static_id_seq', 4, true);


--
-- Data for Name: main_static_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_static_translation (id, language_code, name, slug, image, body, master_id) FROM stdin;
1	ru	Доставка	dostavka		<p>ДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставка</p>	1
2	ru	Оплата	oplata		<p>ОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплата</p>	2
3	ru	Контакты	kontakty		<p>КонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтакты</p>	3
4	ru	Премущества	premushestva		<p>ПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремущества</p>	4
5	en	Benefits	benefits		<p><a href="http://127.0.0.1:8000/en/admin/main/menu/4/change/">BenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefits</a></p>	4
6	en	Contact	contact		<p>ContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContact</p>	3
7	uz	Avfzalliklarimiz	avfzalliklarimiz		<p>avfzalliklarimiz</p>	4
\.


--
-- Name: main_static_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_static_translation_id_seq', 7, true);


--
-- Data for Name: main_staticfooterpage; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_staticfooterpage (id, menu_type) FROM stdin;
1	0
2	1
\.


--
-- Name: main_staticfooterpage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_staticfooterpage_id_seq', 2, true);


--
-- Data for Name: main_staticfooterpage_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_staticfooterpage_translation (id, language_code, name, slug, body, master_id) FROM stdin;
1	en	For clients	clients	<p>For Clients site is a direct communication channel designed with our clients in mind. Initiate and manage support requests, view announcements and alerts, visit discussion boards, and search product information through this convenient online hub.</p>	1
2	ru	Для клиентов	dlya-klientov	<p>Для клиентов - это прямой канал связи, разработанный с учетом наших клиентов. Инициируйте и управляйте запросами поддержки, просматривайте объявления и предупреждения, посещайте доски обсуждений и просматривайте информацию о продукте через этот удобный онлайн-концентратор.</p>	1
3	ru	Для партнеров	dlya-partnerov	<p>Мы сотрудничаем с более чем 6 000 реселлерами по всему миру, предоставляя услуги, продукты и знания, необходимые им для обеспечения безопасности своих клиентов в Интернете.</p>	2
4	en	For partners	partners	<p>We partner with over 6,000 resellers around the globe, providing the services, products and expertise they need to keep their customers safe online.</p>	2
5	uz	Hamkorlar	hamkorlar	<p>Test hamkorlar</p>	2
\.


--
-- Name: main_staticfooterpage_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_staticfooterpage_translation_id_seq', 5, true);


--
-- Data for Name: main_usermenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_usermenu (id, "order") FROM stdin;
\.


--
-- Name: main_usermenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_usermenu_id_seq', 1, false);


--
-- Data for Name: main_usermenu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_usermenu_translation (id, language_code, name, slug, master_id) FROM stdin;
\.


--
-- Name: main_usermenu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.main_usermenu_translation_id_seq', 1, false);


--
-- Data for Name: main_usersmenu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.main_usersmenu (menu_ptr_id) FROM stdin;
\.


--
-- Data for Name: orders_cart; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.orders_cart (id, session_key, count, status, total_price, order_id, variation_id) FROM stdin;
132	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	5500.00	22	184
133	04d7fca2-8a4f-438b-912b-94404bfa41bb	2	t	9200.00	22	195
153	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	4600.00	23	195
154	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	5500.00	23	184
201	28c52191-15b5-4142-a3be-ca90503d6969	1	t	6600.00	\N	196
113	1d599997-4f17-416b-b8cd-552f820afb4b	1	t	17600.00	\N	197
156	04d7fca2-8a4f-438b-912b-94404bfa41bb	2	t	9200.00	24	195
155	04d7fca2-8a4f-438b-912b-94404bfa41bb	2	t	11000.00	24	184
203	28c52191-15b5-4142-a3be-ca90503d6969	1	t	50000.00	\N	198
116	1aa4b5f0-b345-4cb1-bfe1-71471912dfcf	1	t	5500.00	17	184
117	1aa4b5f0-b345-4cb1-bfe1-71471912dfcf	1	t	5502.00	17	187
157	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	5500.00	25	184
158	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	4600.00	25	195
202	28c52191-15b5-4142-a3be-ca90503d6969	3	t	13800.00	\N	195
159	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	5500.00	26	184
160	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	4600.00	26	195
186	2aac4573-5ebe-4138-a592-235667ac842b	1	t	5500.00	30	184
185	2aac4573-5ebe-4138-a592-235667ac842b	1	t	4600.00	30	195
204	cb827b5e-cdb3-426f-848e-99e793dda9a8	1	t	5502.00	\N	187
191	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	17600.00	\N	197
125	28c52191-15b5-4142-a3be-ca90503d6969	1	t	6600.00	19	196
205	28c52191-15b5-4142-a3be-ca90503d6969	2	t	35200.00	\N	197
192	04d7fca2-8a4f-438b-912b-94404bfa41bb	2	t	11012.00	\N	194
126	04d7fca2-8a4f-438b-912b-94404bfa41bb	4	t	18400.00	20	195
127	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	5500.00	20	184
187	2aac4573-5ebe-4138-a592-235667ac842b	1	t	17600.00	\N	197
129	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	5500.00	21	184
131	04d7fca2-8a4f-438b-912b-94404bfa41bb	1	t	4600.00	21	195
195	533845b0-c715-4cd3-8ea0-20ba03e2b61e	10	t	56030.00	\N	189
196	533845b0-c715-4cd3-8ea0-20ba03e2b61e	1	t	6600.00	\N	196
194	533845b0-c715-4cd3-8ea0-20ba03e2b61e	3	t	52800.00	\N	197
197	533845b0-c715-4cd3-8ea0-20ba03e2b61e	1	t	5504.00	\N	190
200	533845b0-c715-4cd3-8ea0-20ba03e2b61e	1	t	5001.00	\N	185
199	533845b0-c715-4cd3-8ea0-20ba03e2b61e	6	t	33606.00	\N	186
198	533845b0-c715-4cd3-8ea0-20ba03e2b61e	16	t	80080.00	\N	191
181	28c52191-15b5-4142-a3be-ca90503d6969	1	t	17600.00	31	197
182	28c52191-15b5-4142-a3be-ca90503d6969	1	t	5502.00	31	187
183	28c52191-15b5-4142-a3be-ca90503d6969	1	t	5503.00	31	188
\.


--
-- Name: orders_cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.orders_cart_id_seq', 205, true);


--
-- Data for Name: orders_order; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.orders_order (id, client_name, created, customer_id, phone, shipping_address, state, total_price, order_unique_id, products) FROM stdin;
31	A'zam	2018-04-21 18:23:50.885917+05	\N	998389478	123, maxam	0	28605.00	18eab986-cf28-43ea-9a7c-519c5f619f22	
16	A'zam Mamatmurodov	2018-04-04 22:57:10.176104+05	1	998389478	Address test	0	11200.00	af9a1bcb-7ea4-45de-a021-f00680f6b992	
17	asasasnkkans	2018-04-07 16:54:05.942561+05	\N	q9u0192u019u	asnxkajsnkasnkajs	0	11002.00	3822d671-aa07-4624-8c37-3a4cebf43421	
18	A'zam Mamatmurodov	2018-04-09 12:06:45.329305+05	1	123412121	asasas	0	36718.00	3d03a479-5d03-4c58-87c9-d945943b8ca0	
19	A'zam Mamatmurodov	2018-04-09 12:24:45.743124+05	1	123412121	asasas	0	6600.00	2ba27123-0b36-4149-8bbe-1bbeff8b655e	
20	A'zam Mamatmurodov	2018-04-13 00:31:43.285007+05	1	123412112	asrrrr  ko'chasi	0	23900.00	ff2f419f-622a-451b-b1b0-78ec27401a9e	
21	A'zam Mamatmurodov	2018-04-13 01:15:46.391141+05	1	333333333	asasas	0	10100.00	d88753f5-941f-4c66-b15a-5f6f99c10429	
22	A'zam Mamatmurodov	2018-04-18 11:44:47.037886+05	1	121210909	aaasa	0	14700.00	59361ba4-a3db-4976-a5d0-d80350815230	
23	A'zam Mamatmurodov	2018-04-18 12:31:46.570264+05	1	121210909	aaasa	0	10100.00	2eb8ad56-198c-4bc7-99f6-9c78356cf214	
24	A'zam Mamatmurodov	2018-04-18 16:19:12.816623+05	1	121210909	aaasa	0	20200.00	7ee2ef52-d947-4d73-abf0-5f4467eb8e7e	
25	A'zam Mamatmurodov	2018-04-18 16:28:05.019934+05	1	121210909	aaasa	0	10100.00	d1ccb46c-0d99-41ff-a8be-c0aef2ccb6d1	
26	A'zam Mamatmurodov	2018-04-18 16:30:07.340035+05	1	123412112	asrrrr	0	10100.00	1ff47b45-52ad-4e63-b6ee-d4519dbf1a74	
27	A'zam Mamatmurodov	2018-04-18 18:21:10.606643+05	1	121210900	aaasa	0	23103.00	825c1d23-19d2-4bc2-9c6e-5d371842db23	
28	Maxam	2018-04-18 18:25:57.259075+05	\N	998389478	Tashkent, stret, karatash	0	23103.00	49011ef7-e4da-4546-984b-1578ebd76f7e	
29	A'zam	2018-04-18 19:49:38.220376+05	\N	998389478	Tashkent, Karatash str.	0	15003.00	e18aa668-9c94-4ad5-863e-3583eb54e1e1	
30	hfhhfhg	2018-04-21 12:16:24.617622+05	\N	434344343	hfhhfhfhfhfhfhfhgf	0	10100.00	32be7585-460c-40c8-815f-3d9197bbd911	
\.


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 31, true);


--
-- Data for Name: payment_paycomtransaction; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.payment_paycomtransaction (id, paycom_transaction_id, paycom_time, paycom_time_datetime, create_time, perform_time, cancel_time, amount, state, reason, receivers, order_id) FROM stdin;
\.


--
-- Name: payment_paycomtransaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.payment_paycomtransaction_id_seq', 1, false);


--
-- Data for Name: products_brands; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_brands (id, name, logo, category_id) FROM stdin;
21	Hayat	brands/VGjc50U.jpg	19
20	Polard	brands/leones-fondos-de-pantalla-hd-Fotosdelanaturaleza-4-1024x640.jpg	20
\.


--
-- Name: products_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_brands_id_seq', 21, true);


--
-- Data for Name: products_category; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_category (id, "order", lft, rght, tree_id, mptt_level, parent_id) FROM stdin;
4	0	1	2	3	0	\N
11	0	2	3	4	1	5
12	0	4	5	4	1	5
6	0	1	2	6	0	\N
7	0	1	2	7	0	\N
8	0	1	2	8	0	\N
9	0	1	2	9	0	\N
14	0	12	13	4	1	5
15	0	14	15	4	1	5
19	0	3	4	10	2	18
20	0	5	6	10	2	18
2	0	1	4	1	0	\N
3	0	1	4	2	0	\N
22	0	2	3	2	1	3
23	0	7	8	10	2	18
13	0	6	11	4	1	5
21	0	2	3	1	1	2
17	0	9	10	4	2	13
16	0	7	8	4	2	13
5	0	1	16	4	0	\N
10	0	1	12	10	0	\N
18	0	2	11	10	1	10
24	0	9	10	10	2	18
\.


--
-- Name: products_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_category_id_seq', 24, true);


--
-- Data for Name: products_category_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_category_translation (id, language_code, name, master_id, slug) FROM stdin;
2	ru	Водоэмульсионная краска	2	vodoimulsionnaya-kraska
3	uz	Vodoimulsiya kraska	2	vodoimulsiya-kraska
4	ru	Герметика и Монтаж пена	3	germetika-i-montazh-pena
5	ru	Грунтовка	4	gruntovka
6	ru	Декоративная штукатура	5	dekorativnaya-shtukatura
7	ru	Инструменты	6	instrumenty
8	ru	Клеи	7	klei
9	ru	Колер	8	koler
10	ru	Сухие строй-смеси	9	suhie-stroj-smesi
11	ru	Эмалевая краска и Лак	10	emalevaya-kraska-i-lak
12	ru	Внутренная	11	vnutrennaya
13	ru	Премиум	12	premium
15	ru	Фасадная	14	fasadnaya
16	ru	Цветная	15	cvetnaya
19	en	Water-based paint	2	water-based-paint
20	ru	Краска	18	kraska
21	ru	Универсальная	19	universalnaya
22	ru	Половая	20	polovaya
24	ru	Пена	22	pena
25	ru	Краска-115	23	kraska-115
14	ru	Универсальная	13	dekorativnaya-shkaturka-universalnaya
23	ru	Фасадная	21	vodoimmulsionnaya-kraska-fasadnaya
18	ru	Премиум	17	dekorativnaya-shkaturka-universalnaya-premium
17	ru	Внутренная	16	dekorativnaya-shkaturka-universalnaya-vnutrennaya
26	ru	Цветная	24	kraska-cvetnaya
\.


--
-- Name: products_category_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_category_translation_id_seq', 26, true);


--
-- Data for Name: products_color; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_color (id, color) FROM stdin;
1	#FF0000
2	#3CB823
3	#197DFF
5	#FFFFFF
6	#14A1FF
7	#FFE357
8	#41FF33
9	#FF4A4A
10	#FF3399
13	#0D090C
14	#FFDE5C
\.


--
-- Data for Name: products_color_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_color_translation (id, language_code, name, master_id) FROM stdin;
1	ru	Красный	1
2	en	Red	1
3	uz	Qizil	1
4	uz	Yashil	2
5	ru	Зеленый	2
6	en	Green	2
7	ru	Синий	3
9	ru	белая	5
10	ru	голубая	6
11	ru	желтая	7
12	ru	темно-зеленая	8
13	ru	красно-коричневая	9
14	ru	светло-серая	10
17	ru	черная	13
18	ru	светло-бежевая	14
\.


--
-- Name: products_color_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_color_translation_id_seq', 18, true);


--
-- Data for Name: products_product; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_product (id, name, description, characters, brand_id, category_id, owner_id, updated, available_in_stock, volume_id, is_recommended, price, is_top, default_image, image_0, image_1, image_2) FROM stdin;
114	HAYAT PREMIUM FASAD Краска для нар. работ силикон2	Предназначена для наржной окраски зданий и сооружений, по кирпичным и бетонным, деревянным и другим пористым покрытиям по загрунтованной поверхности металла2	Test info2	21	23	3	2018-03-31	f	1	t	4600.00	t	image_0	products/earth_by_n4u2k.jpg	products/prod.png	
115	Test - Hayat	Test – Hayat – 2	Test – Hayat – 3	21	23	3	2018-04-02	f	1	f	17600.00	f	image_0	products/prod.png	products/earth_by_n4u2k.jpg	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg
113	HAYAT Эмаль ПФ-115	<p>Предназначена для окрашивания металлических, деревянных и других поверхностей, подвергающихся атмосферным восдействиям.</p>	<p>Предназначена для окрашивания металлических, деревянных и других поверхностей, подвергающихся атмосферным восдействиям.</p>	21	24	4	2018-04-14	t	1	t	5500.00	t	image_0	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg	products/dota_2_igra_logotip_fon_92935_1920x1080.jpg	products/JSJ6EBorAEE.jpg
116	Test product	<p>asaasas</p>	<p>asasasas</p>	21	21	18	2018-04-14	t	1	f	50000.00	f	image_0	products/leones-fondos-de-pantalla-hd-Fotosdelanaturaleza-4-1024x640.jpg		
\.


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_product_id_seq', 116, true);


--
-- Name: products_productcolor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_productcolor_id_seq', 14, true);


--
-- Data for Name: products_productimage; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_productimage (id, image, product_id) FROM stdin;
\.


--
-- Name: products_productimage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_productimage_id_seq', 31, true);


--
-- Data for Name: products_review; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_review (created_at, id, text, is_approved, product_id, reviewer_location, subject, reviewer) FROM stdin;
\.


--
-- Name: products_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_review_id_seq', 18, true);


--
-- Data for Name: products_variation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_variation (id, price, quantity, product_id, name, color_id) FROM stdin;
184	5500.00	2	113	0.9	5
185	5001.00	4	113	3	6
186	5601.00	6	113	3	7
187	5502.00	8	113	22	2
188	5503.00	11	113	2.5	1
189	5603.00	12	113	22	9
190	5504.00	14	113	3	10
191	5005.00	16	113	3	3
193	5006.00	19	113	2.5	13
194	5506.00	20	113	22	14
195	4600.00	5	114	20	13
196	6600.00	4	114	10	14
197	17600.00	3	115	11	14
192	5505.00	0	113	3	8
198	50000.00	2	116	19	\N
199	20000.00	0	116	22	\N
\.


--
-- Name: products_variation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_variation_id_seq', 199, true);


--
-- Data for Name: products_volumetype; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_volumetype (id) FROM stdin;
1
\.


--
-- Name: products_volumetype_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_volumetype_id_seq', 1, true);


--
-- Data for Name: products_volumetype_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.products_volumetype_translation (id, language_code, name, master_id) FROM stdin;
1	ru	Кг	1
2	en	Kg	1
3	uz	Kg	1
\.


--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.products_volumetype_translation_id_seq', 3, true);


--
-- Data for Name: users_client; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_client (id, address, user_id, delivery_address_id) FROM stdin;
2	Tashkent	18	\N
3	Tashkent	19	\N
1	Tashkent, Mirzo Ulug'bek district.	1	\N
4	12	21	\N
\.


--
-- Name: users_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_client_id_seq', 4, true);


--
-- Data for Name: users_deliveryaddress; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_deliveryaddress (id, address, email, is_default, phone, user_id) FROM stdin;
16	aaasa	asas#@aas.acomo	f	121210900	1
17	asrrrr	asrrrr@asrrrr.asrrrr	f	123412112	1
18	muqimiy	djsalf@jflasj.com	f	123412112	1
\.


--
-- Name: users_deliveryaddress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_deliveryaddress_id_seq', 18, true);


--
-- Data for Name: users_files; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_files (id, file) FROM stdin;
\.


--
-- Name: users_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_files_id_seq', 1, false);


--
-- Data for Name: users_merchant; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_merchant (id, merchant_type, user_id) FROM stdin;
1	1	3
2	1	4
\.


--
-- Name: users_merchant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_merchant_id_seq', 2, true);


--
-- Data for Name: users_paymentcards; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_paymentcards (id, card_holder, cart_number, expiration_date, billing_address, holder_id, is_default) FROM stdin;
8	succsses	asdasdas	2018-04-13	asdcas	1	f
9	default	ascasc	2018-04-13	cascasca	1	f
10	secure	secure	2018-04-14	ascsaca	1	f
11	acsa	active	2018-04-20	ascascas	1	f
3	edit	1211212300	2018-04-22	acsacassc	1	f
6	succsses	succsses	2018-04-13	casasassss	1	f
2	qsas	1212	2018-04-18	asas	1	t
\.


--
-- Name: users_paymentcards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_paymentcards_id_seq', 12, true);


--
-- Data for Name: users_user; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_user (id, password, last_login, is_superuser, is_staff, phone, email, first_name, last_name, date_joined, is_active, avatar_id) FROM stdin;
14	pbkdf2_sha256$36000$oYwb6del7oVe$e2SFCWUn7kwhy6z32Cj5FcB5oVWbuS977+FK+Kk1drg=	\N	f	f	99812312		Maxam		2018-03-03 18:11:20.079564+05	t	\N
15	pbkdf2_sha256$36000$HOOZQHNqLuX4$qlyg6hArRImovqYBQCLrrQ9PzDxVFFQfG3VH2fZml8o=	\N	f	f	12312		asas		2018-03-07 05:54:41.298668+05	t	\N
16	pbkdf2_sha256$36000$dTZAiIpWdoiW$XAsCma9iqN3t16g2CeQ807/KB14JpNjcUY0F7CSTwq0=	2018-03-07 05:57:50.127116+05	f	f	123		maxam		2018-03-07 05:57:06.657493+05	t	\N
3	pbkdf2_sha256$36000$zZ1POOYiN9cm$MmRm0Ti8P7zmmHwIIh3oGTdQXuvv+8IXENglAuO19Vs=	\N	f	f	998991111111	Polard@example.com	Polard	Polard	2018-03-02 00:48:40.791109+05	t	\N
4	pbkdf2_sha256$36000$cmVDwSWrOft2$dDTZO7VzHOkz2k4tFU1mhCmujVBWLiSPhXqFpS4mteE=	\N	f	f	991234567	Hayat@example.com	Hayat	Hayat	2018-03-02 00:49:27.367788+05	t	\N
20	pbkdf2_sha256$36000$n6vQ5gdcXXMt$g3+S75A2y1G6Q6rtz43i9s7chkyPHBiwHAtM+nSFU3c=	\N	f	f	998389412	\N			2018-04-09 17:18:27.071425+05	t	\N
21	pbkdf2_sha256$36000$mnL3qTdHtkSN$fSchEsZZS1fVgl9IXIrk3L1hPApwLADLfb1FrABimr4=	2018-04-09 17:21:02.532877+05	f	f	998389411	\N	A'zam	Mamatmurodov	2018-04-09 17:21:02.31837+05	t	\N
18	pbkdf2_sha256$36000$AXeCZtiA4BLH$ZftfCfuYnlQAQzLGXh7wjT0caS+K/8ZdNK8Sg2I4kVk=	2018-04-04 20:09:21.392845+05	f	f	998389471		A'zam	Mamatmurodov	2018-04-04 20:09:21.050211+05	t	\N
12	pbkdf2_sha256$36000$mi6hUfz6r2OZ$i3anJwfWPj92QI0Y3jh1gAfB3xwiGq1oV7SWqG93fTE=	\N	f	f	1234567		Mamatmurodov		2018-03-03 02:09:15.192667+05	t	\N
13	pbkdf2_sha256$36000$OyPip0KnrHgB$8fLeZhVKAgAcogd/n9dAirWo2Gv2Q2gD8X5PKWxdbf4=	2018-03-03 02:09:49.258501+05	f	f	12345		Mamatmurodov		2018-03-03 02:09:40.723852+05	t	\N
19	pbkdf2_sha256$36000$kkVBM20B4KMH$bYcduNLtjVuzjpFI5mc3Y3dy9GNld5gxtH7L7uF/z64=	2018-04-04 21:13:56.756841+05	f	f	998389472		A'zam	Mamatmurodov	2018-04-04 21:13:56.377763+05	t	\N
1	pbkdf2_sha256$36000$rlsMmomCmGxK$veVUZ7drQ/0Shz6is5MhkmXLwYJyG2kmFGD/2pZNip4=	2018-04-26 16:27:22.610326+05	t	t	998389478	azam.mamatmurodov@gmail.com	A'zamjon	Mamatmurodov	2018-02-14 01:24:32.11251+05	t	\N
\.


--
-- Data for Name: users_user_groups; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: users_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_user_groups_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_user_id_seq', 21, true);


--
-- Data for Name: users_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY public.users_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('public.users_user_user_permissions_id_seq', 1, false);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: easy_thumbnails_source easy_thumbnails_source_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_source
    ADD CONSTRAINT easy_thumbnails_source_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_source easy_thumbnails_source_storage_hash_name_481ce32d_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_source
    ADD CONSTRAINT easy_thumbnails_source_storage_hash_name_481ce32d_uniq UNIQUE (storage_hash, name);


--
-- Name: easy_thumbnails_thumbnail easy_thumbnails_thumbnai_storage_hash_name_source_fb375270_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnail
    ADD CONSTRAINT easy_thumbnails_thumbnai_storage_hash_name_source_fb375270_uniq UNIQUE (storage_hash, name, source_id);


--
-- Name: easy_thumbnails_thumbnail easy_thumbnails_thumbnail_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnail
    ADD CONSTRAINT easy_thumbnails_thumbnail_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_thumbnaildimensions easy_thumbnails_thumbnaildimensions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnaildimensions
    ADD CONSTRAINT easy_thumbnails_thumbnaildimensions_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_thumbnaildimensions easy_thumbnails_thumbnaildimensions_thumbnail_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnaildimensions
    ADD CONSTRAINT easy_thumbnails_thumbnaildimensions_thumbnail_id_key UNIQUE (thumbnail_id);


--
-- Name: filer_clipboard filer_clipboard_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboard
    ADD CONSTRAINT filer_clipboard_pkey PRIMARY KEY (id);


--
-- Name: filer_clipboarditem filer_clipboarditem_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboarditem
    ADD CONSTRAINT filer_clipboarditem_pkey PRIMARY KEY (id);


--
-- Name: filer_file filer_file_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_file
    ADD CONSTRAINT filer_file_pkey PRIMARY KEY (id);


--
-- Name: filer_folder filer_folder_parent_id_name_bc773258_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folder
    ADD CONSTRAINT filer_folder_parent_id_name_bc773258_uniq UNIQUE (parent_id, name);


--
-- Name: filer_folder filer_folder_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folder
    ADD CONSTRAINT filer_folder_pkey PRIMARY KEY (id);


--
-- Name: filer_folderpermission filer_folderpermission_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folderpermission
    ADD CONSTRAINT filer_folderpermission_pkey PRIMARY KEY (id);


--
-- Name: filer_image filer_image_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_image
    ADD CONSTRAINT filer_image_pkey PRIMARY KEY (file_ptr_id);


--
-- Name: filer_thumbnailoption filer_thumbnailoption_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_thumbnailoption
    ADD CONSTRAINT filer_thumbnailoption_pkey PRIMARY KEY (id);


--
-- Name: main_banner main_banner_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner
    ADD CONSTRAINT main_banner_pkey PRIMARY KEY (id);


--
-- Name: main_banner_translation main_banner_translation_language_code_master_id_ebf3668a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation
    ADD CONSTRAINT main_banner_translation_language_code_master_id_ebf3668a_uniq UNIQUE (language_code, master_id);


--
-- Name: main_banner_translation main_banner_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation
    ADD CONSTRAINT main_banner_translation_pkey PRIMARY KEY (id);


--
-- Name: main_customermenu main_customermenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu
    ADD CONSTRAINT main_customermenu_pkey PRIMARY KEY (id);


--
-- Name: main_customermenu_translation main_customermenu_transl_language_code_master_id_e197b468_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation
    ADD CONSTRAINT main_customermenu_transl_language_code_master_id_e197b468_uniq UNIQUE (language_code, master_id);


--
-- Name: main_customermenu_translation main_customermenu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation
    ADD CONSTRAINT main_customermenu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_customersmenu main_customersmenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customersmenu
    ADD CONSTRAINT main_customersmenu_pkey PRIMARY KEY (menu_ptr_id);


--
-- Name: main_menu main_menu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu
    ADD CONSTRAINT main_menu_pkey PRIMARY KEY (id);


--
-- Name: main_menu_translation main_menu_translation_language_code_master_id_a87e80af_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation
    ADD CONSTRAINT main_menu_translation_language_code_master_id_a87e80af_uniq UNIQUE (language_code, master_id);


--
-- Name: main_menu_translation main_menu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation
    ADD CONSTRAINT main_menu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_static main_static_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static
    ADD CONSTRAINT main_static_pkey PRIMARY KEY (id);


--
-- Name: main_static_translation main_static_translation_language_code_master_id_f27431bb_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation
    ADD CONSTRAINT main_static_translation_language_code_master_id_f27431bb_uniq UNIQUE (language_code, master_id);


--
-- Name: main_static_translation main_static_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation
    ADD CONSTRAINT main_static_translation_pkey PRIMARY KEY (id);


--
-- Name: main_staticfooterpage main_staticfooterpage_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_staticfooterpage
    ADD CONSTRAINT main_staticfooterpage_pkey PRIMARY KEY (id);


--
-- Name: main_staticfooterpage_translation main_staticfooterpage_tr_language_code_master_id_fffcdf44_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_staticfooterpage_translation
    ADD CONSTRAINT main_staticfooterpage_tr_language_code_master_id_fffcdf44_uniq UNIQUE (language_code, master_id);


--
-- Name: main_staticfooterpage_translation main_staticfooterpage_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_staticfooterpage_translation
    ADD CONSTRAINT main_staticfooterpage_translation_pkey PRIMARY KEY (id);


--
-- Name: main_usermenu main_usermenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu
    ADD CONSTRAINT main_usermenu_pkey PRIMARY KEY (id);


--
-- Name: main_usermenu_translation main_usermenu_translation_language_code_master_id_c91aa177_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation
    ADD CONSTRAINT main_usermenu_translation_language_code_master_id_c91aa177_uniq UNIQUE (language_code, master_id);


--
-- Name: main_usermenu_translation main_usermenu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation
    ADD CONSTRAINT main_usermenu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_usersmenu main_usersmenu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usersmenu
    ADD CONSTRAINT main_usersmenu_pkey PRIMARY KEY (menu_ptr_id);


--
-- Name: orders_cart orders_cart_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart
    ADD CONSTRAINT orders_cart_pkey PRIMARY KEY (id);


--
-- Name: orders_order orders_order_order_unique_id_01fff898_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_order_unique_id_01fff898_uniq UNIQUE (order_unique_id);


--
-- Name: orders_order orders_order_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_pkey PRIMARY KEY (id);


--
-- Name: payment_paycomtransaction payment_paycomtransaction_paycom_transaction_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.payment_paycomtransaction
    ADD CONSTRAINT payment_paycomtransaction_paycom_transaction_id_key UNIQUE (paycom_transaction_id);


--
-- Name: payment_paycomtransaction payment_paycomtransaction_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.payment_paycomtransaction
    ADD CONSTRAINT payment_paycomtransaction_pkey PRIMARY KEY (id);


--
-- Name: products_brands products_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_brands
    ADD CONSTRAINT products_brands_pkey PRIMARY KEY (id);


--
-- Name: products_category products_category_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_pkey PRIMARY KEY (id);


--
-- Name: products_category_translation products_category_transl_language_code_master_id_03d12f31_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_transl_language_code_master_id_03d12f31_uniq UNIQUE (language_code, master_id);


--
-- Name: products_category_translation products_category_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_translation_pkey PRIMARY KEY (id);


--
-- Name: products_category_translation products_category_translation_slug_d9e2774a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_translation_slug_d9e2774a_uniq UNIQUE (slug);


--
-- Name: products_color_translation products_color_translati_language_code_master_id_3b02aa43_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation
    ADD CONSTRAINT products_color_translati_language_code_master_id_3b02aa43_uniq UNIQUE (language_code, master_id);


--
-- Name: products_color_translation products_color_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation
    ADD CONSTRAINT products_color_translation_pkey PRIMARY KEY (id);


--
-- Name: products_product products_product_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_pkey PRIMARY KEY (id);


--
-- Name: products_color products_productcolor_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color
    ADD CONSTRAINT products_productcolor_pkey PRIMARY KEY (id);


--
-- Name: products_productimage products_productimage_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_productimage
    ADD CONSTRAINT products_productimage_pkey PRIMARY KEY (id);


--
-- Name: products_review products_review_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_review
    ADD CONSTRAINT products_review_pkey PRIMARY KEY (id);


--
-- Name: products_variation products_variation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation
    ADD CONSTRAINT products_variation_pkey PRIMARY KEY (id);


--
-- Name: products_volumetype products_volumetype_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype
    ADD CONSTRAINT products_volumetype_pkey PRIMARY KEY (id);


--
-- Name: products_volumetype_translation products_volumetype_tran_language_code_master_id_fb95d2c8_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation
    ADD CONSTRAINT products_volumetype_tran_language_code_master_id_fb95d2c8_uniq UNIQUE (language_code, master_id);


--
-- Name: products_volumetype_translation products_volumetype_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation
    ADD CONSTRAINT products_volumetype_translation_pkey PRIMARY KEY (id);


--
-- Name: users_client users_client_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_pkey PRIMARY KEY (id);


--
-- Name: users_client users_client_user_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_user_id_key UNIQUE (user_id);


--
-- Name: users_deliveryaddress users_deliveryaddress_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_deliveryaddress
    ADD CONSTRAINT users_deliveryaddress_pkey PRIMARY KEY (id);


--
-- Name: users_files users_files_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_files
    ADD CONSTRAINT users_files_pkey PRIMARY KEY (id);


--
-- Name: users_merchant users_merchant_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant
    ADD CONSTRAINT users_merchant_pkey PRIMARY KEY (id);


--
-- Name: users_merchant users_merchant_user_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant
    ADD CONSTRAINT users_merchant_user_id_key UNIQUE (user_id);


--
-- Name: users_paymentcards users_paymentcards_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_paymentcards
    ADD CONSTRAINT users_paymentcards_pkey PRIMARY KEY (id);


--
-- Name: users_user users_user_avatar_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_avatar_id_key UNIQUE (avatar_id);


--
-- Name: users_user_groups users_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_pkey PRIMARY KEY (id);


--
-- Name: users_user_groups users_user_groups_user_id_group_id_b88eab82_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_user_id_group_id_b88eab82_uniq UNIQUE (user_id, group_id);


--
-- Name: users_user users_user_phone_fe37f55c_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_phone_fe37f55c_uniq UNIQUE (phone);


--
-- Name: users_user users_user_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_pkey PRIMARY KEY (id);


--
-- Name: users_user_user_permissions users_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: users_user_user_permissions users_user_user_permissions_user_id_permission_id_43338c45_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_user_id_permission_id_43338c45_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: easy_thumbnails_source_name_5fe0edc6; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_source_name_5fe0edc6 ON public.easy_thumbnails_source USING btree (name);


--
-- Name: easy_thumbnails_source_name_5fe0edc6_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_source_name_5fe0edc6_like ON public.easy_thumbnails_source USING btree (name varchar_pattern_ops);


--
-- Name: easy_thumbnails_source_storage_hash_946cbcc9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_source_storage_hash_946cbcc9 ON public.easy_thumbnails_source USING btree (storage_hash);


--
-- Name: easy_thumbnails_source_storage_hash_946cbcc9_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_source_storage_hash_946cbcc9_like ON public.easy_thumbnails_source USING btree (storage_hash varchar_pattern_ops);


--
-- Name: easy_thumbnails_thumbnail_name_b5882c31; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_thumbnail_name_b5882c31 ON public.easy_thumbnails_thumbnail USING btree (name);


--
-- Name: easy_thumbnails_thumbnail_name_b5882c31_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_thumbnail_name_b5882c31_like ON public.easy_thumbnails_thumbnail USING btree (name varchar_pattern_ops);


--
-- Name: easy_thumbnails_thumbnail_source_id_5b57bc77; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_thumbnail_source_id_5b57bc77 ON public.easy_thumbnails_thumbnail USING btree (source_id);


--
-- Name: easy_thumbnails_thumbnail_storage_hash_f1435f49; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_thumbnail_storage_hash_f1435f49 ON public.easy_thumbnails_thumbnail USING btree (storage_hash);


--
-- Name: easy_thumbnails_thumbnail_storage_hash_f1435f49_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX easy_thumbnails_thumbnail_storage_hash_f1435f49_like ON public.easy_thumbnails_thumbnail USING btree (storage_hash varchar_pattern_ops);


--
-- Name: filer_clipboard_user_id_b52ff0bc; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_clipboard_user_id_b52ff0bc ON public.filer_clipboard USING btree (user_id);


--
-- Name: filer_clipboarditem_clipboard_id_7a76518b; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_clipboarditem_clipboard_id_7a76518b ON public.filer_clipboarditem USING btree (clipboard_id);


--
-- Name: filer_clipboarditem_file_id_06196f80; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_clipboarditem_file_id_06196f80 ON public.filer_clipboarditem USING btree (file_id);


--
-- Name: filer_file_folder_id_af803bbb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_file_folder_id_af803bbb ON public.filer_file USING btree (folder_id);


--
-- Name: filer_file_owner_id_b9e32671; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_file_owner_id_b9e32671 ON public.filer_file USING btree (owner_id);


--
-- Name: filer_file_polymorphic_ctype_id_f44903c1; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_file_polymorphic_ctype_id_f44903c1 ON public.filer_file USING btree (polymorphic_ctype_id);


--
-- Name: filer_folder_level_b631d28a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folder_level_b631d28a ON public.filer_folder USING btree (level);


--
-- Name: filer_folder_lft_2c2b69f1; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folder_lft_2c2b69f1 ON public.filer_folder USING btree (lft);


--
-- Name: filer_folder_owner_id_be530fb4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folder_owner_id_be530fb4 ON public.filer_folder USING btree (owner_id);


--
-- Name: filer_folder_parent_id_308aecda; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folder_parent_id_308aecda ON public.filer_folder USING btree (parent_id);


--
-- Name: filer_folder_rght_34946267; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folder_rght_34946267 ON public.filer_folder USING btree (rght);


--
-- Name: filer_folder_tree_id_b016223c; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folder_tree_id_b016223c ON public.filer_folder USING btree (tree_id);


--
-- Name: filer_folderpermission_folder_id_5d02f1da; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folderpermission_folder_id_5d02f1da ON public.filer_folderpermission USING btree (folder_id);


--
-- Name: filer_folderpermission_group_id_8901bafa; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folderpermission_group_id_8901bafa ON public.filer_folderpermission USING btree (group_id);


--
-- Name: filer_folderpermission_user_id_7673d4b6; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX filer_folderpermission_user_id_7673d4b6 ON public.filer_folderpermission USING btree (user_id);


--
-- Name: main_banner_translation_language_code_18439eee; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_language_code_18439eee ON public.main_banner_translation USING btree (language_code);


--
-- Name: main_banner_translation_language_code_18439eee_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_language_code_18439eee_like ON public.main_banner_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_banner_translation_master_id_f62e61c4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_master_id_f62e61c4 ON public.main_banner_translation USING btree (master_id);


--
-- Name: main_banner_translation_slug_f62a4547; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_slug_f62a4547 ON public.main_banner_translation USING btree (slug);


--
-- Name: main_banner_translation_slug_f62a4547_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_slug_f62a4547_like ON public.main_banner_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_customermenu_translation_language_code_8821aca5; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_language_code_8821aca5 ON public.main_customermenu_translation USING btree (language_code);


--
-- Name: main_customermenu_translation_language_code_8821aca5_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_language_code_8821aca5_like ON public.main_customermenu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_customermenu_translation_master_id_094e74e8; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_master_id_094e74e8 ON public.main_customermenu_translation USING btree (master_id);


--
-- Name: main_customermenu_translation_slug_0b9f55a4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_slug_0b9f55a4 ON public.main_customermenu_translation USING btree (slug);


--
-- Name: main_customermenu_translation_slug_0b9f55a4_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_customermenu_translation_slug_0b9f55a4_like ON public.main_customermenu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_menu_translation_language_code_b760b451; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_language_code_b760b451 ON public.main_menu_translation USING btree (language_code);


--
-- Name: main_menu_translation_language_code_b760b451_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_language_code_b760b451_like ON public.main_menu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_menu_translation_master_id_6cb98964; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_master_id_6cb98964 ON public.main_menu_translation USING btree (master_id);


--
-- Name: main_menu_translation_slug_155a9128; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_slug_155a9128 ON public.main_menu_translation USING btree (slug);


--
-- Name: main_menu_translation_slug_155a9128_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_slug_155a9128_like ON public.main_menu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_static_translation_language_code_a7e35ca0; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_language_code_a7e35ca0 ON public.main_static_translation USING btree (language_code);


--
-- Name: main_static_translation_language_code_a7e35ca0_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_language_code_a7e35ca0_like ON public.main_static_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_static_translation_master_id_6c9d2d70; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_master_id_6c9d2d70 ON public.main_static_translation USING btree (master_id);


--
-- Name: main_static_translation_slug_7864d7f2; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_slug_7864d7f2 ON public.main_static_translation USING btree (slug);


--
-- Name: main_static_translation_slug_7864d7f2_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_slug_7864d7f2_like ON public.main_static_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_staticfooterpage_translation_language_code_f269d333; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_staticfooterpage_translation_language_code_f269d333 ON public.main_staticfooterpage_translation USING btree (language_code);


--
-- Name: main_staticfooterpage_translation_language_code_f269d333_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_staticfooterpage_translation_language_code_f269d333_like ON public.main_staticfooterpage_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_staticfooterpage_translation_master_id_c8687dff; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_staticfooterpage_translation_master_id_c8687dff ON public.main_staticfooterpage_translation USING btree (master_id);


--
-- Name: main_staticfooterpage_translation_slug_17211c5f; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_staticfooterpage_translation_slug_17211c5f ON public.main_staticfooterpage_translation USING btree (slug);


--
-- Name: main_staticfooterpage_translation_slug_17211c5f_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_staticfooterpage_translation_slug_17211c5f_like ON public.main_staticfooterpage_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_usermenu_translation_language_code_93134d44; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_language_code_93134d44 ON public.main_usermenu_translation USING btree (language_code);


--
-- Name: main_usermenu_translation_language_code_93134d44_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_language_code_93134d44_like ON public.main_usermenu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_usermenu_translation_master_id_ec69a6aa; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_master_id_ec69a6aa ON public.main_usermenu_translation USING btree (master_id);


--
-- Name: main_usermenu_translation_slug_fff0b13a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_slug_fff0b13a ON public.main_usermenu_translation USING btree (slug);


--
-- Name: main_usermenu_translation_slug_fff0b13a_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_usermenu_translation_slug_fff0b13a_like ON public.main_usermenu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: orders_cart_order_id_8e8f80ce; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_cart_order_id_8e8f80ce ON public.orders_cart USING btree (order_id);


--
-- Name: orders_cart_variation_id_09aeaf8e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_cart_variation_id_09aeaf8e ON public.orders_cart USING btree (variation_id);


--
-- Name: orders_order_customer_id_0b76f6a4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_order_customer_id_0b76f6a4 ON public.orders_order USING btree (customer_id);


--
-- Name: orders_order_order_unique_id_01fff898_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX orders_order_order_unique_id_01fff898_like ON public.orders_order USING btree (order_unique_id varchar_pattern_ops);


--
-- Name: payment_paycomtransaction_order_id_8061c1ba; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX payment_paycomtransaction_order_id_8061c1ba ON public.payment_paycomtransaction USING btree (order_id);


--
-- Name: payment_paycomtransaction_paycom_transaction_id_a9016909_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX payment_paycomtransaction_paycom_transaction_id_a9016909_like ON public.payment_paycomtransaction USING btree (paycom_transaction_id varchar_pattern_ops);


--
-- Name: products_brands_category_id_90ebd3a5; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_brands_category_id_90ebd3a5 ON public.products_brands USING btree (category_id);


--
-- Name: products_category_level_999bd550; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_level_999bd550 ON public.products_category USING btree (mptt_level);


--
-- Name: products_category_lft_b068de9d; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_lft_b068de9d ON public.products_category USING btree (lft);


--
-- Name: products_category_parent_id_3388f6c9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_parent_id_3388f6c9 ON public.products_category USING btree (parent_id);


--
-- Name: products_category_rght_c5971abd; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_rght_c5971abd ON public.products_category USING btree (rght);


--
-- Name: products_category_translation_language_code_ddf7527e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_language_code_ddf7527e ON public.products_category_translation USING btree (language_code);


--
-- Name: products_category_translation_language_code_ddf7527e_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_language_code_ddf7527e_like ON public.products_category_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_category_translation_master_id_f53287e3; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_master_id_f53287e3 ON public.products_category_translation USING btree (master_id);


--
-- Name: products_category_translation_slug_d9e2774a_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_slug_d9e2774a_like ON public.products_category_translation USING btree (slug varchar_pattern_ops);


--
-- Name: products_category_tree_id_7d9b3ae8; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_tree_id_7d9b3ae8 ON public.products_category USING btree (tree_id);


--
-- Name: products_color_translation_language_code_f0d74222; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_language_code_f0d74222 ON public.products_color_translation USING btree (language_code);


--
-- Name: products_color_translation_language_code_f0d74222_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_language_code_f0d74222_like ON public.products_color_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_color_translation_master_id_3e7ac7bb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_master_id_3e7ac7bb ON public.products_color_translation USING btree (master_id);


--
-- Name: products_product_brand_id_3e2e8fd1; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_brand_id_3e2e8fd1 ON public.products_product USING btree (brand_id);


--
-- Name: products_product_category_id_9b594869; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_category_id_9b594869 ON public.products_product USING btree (category_id);


--
-- Name: products_product_owner_id_f189d068; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_owner_id_f189d068 ON public.products_product USING btree (owner_id);


--
-- Name: products_product_volume_id_9a242362; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_volume_id_9a242362 ON public.products_product USING btree (volume_id);


--
-- Name: products_productimage_product_id_e747596a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_productimage_product_id_e747596a ON public.products_productimage USING btree (product_id);


--
-- Name: products_review_product_id_d933ffa7; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_review_product_id_d933ffa7 ON public.products_review USING btree (product_id);


--
-- Name: products_variation_color_id_67e0ff3a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_variation_color_id_67e0ff3a ON public.products_variation USING btree (color_id);


--
-- Name: products_variation_product_id_58e457dc; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_variation_product_id_58e457dc ON public.products_variation USING btree (product_id);


--
-- Name: products_volumetype_translation_language_code_1d9b9128; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_language_code_1d9b9128 ON public.products_volumetype_translation USING btree (language_code);


--
-- Name: products_volumetype_translation_language_code_1d9b9128_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_language_code_1d9b9128_like ON public.products_volumetype_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_volumetype_translation_master_id_f5e4ae1f; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_master_id_f5e4ae1f ON public.products_volumetype_translation USING btree (master_id);


--
-- Name: users_client_delivery_address_id_3ec7728a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_client_delivery_address_id_3ec7728a ON public.users_client USING btree (delivery_address_id);


--
-- Name: users_deliveryaddress_user_id_33d75da7; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_deliveryaddress_user_id_33d75da7 ON public.users_deliveryaddress USING btree (user_id);


--
-- Name: users_paymentcards_holder_id_65bb9c5f; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_paymentcards_holder_id_65bb9c5f ON public.users_paymentcards USING btree (holder_id);


--
-- Name: users_user_groups_group_id_9afc8d0e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_groups_group_id_9afc8d0e ON public.users_user_groups USING btree (group_id);


--
-- Name: users_user_groups_user_id_5f6f5a90; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_groups_user_id_5f6f5a90 ON public.users_user_groups USING btree (user_id);


--
-- Name: users_user_phone_fe37f55c_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_phone_fe37f55c_like ON public.users_user USING btree (phone varchar_pattern_ops);


--
-- Name: users_user_user_permissions_permission_id_0b93982e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_user_permissions_permission_id_0b93982e ON public.users_user_user_permissions USING btree (permission_id);


--
-- Name: users_user_user_permissions_user_id_20aca447; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_user_permissions_user_id_20aca447 ON public.users_user_user_permissions USING btree (user_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: easy_thumbnails_thumbnail easy_thumbnails_thum_source_id_5b57bc77_fk_easy_thum; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnail
    ADD CONSTRAINT easy_thumbnails_thum_source_id_5b57bc77_fk_easy_thum FOREIGN KEY (source_id) REFERENCES public.easy_thumbnails_source(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: easy_thumbnails_thumbnaildimensions easy_thumbnails_thum_thumbnail_id_c3a0c549_fk_easy_thum; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.easy_thumbnails_thumbnaildimensions
    ADD CONSTRAINT easy_thumbnails_thum_thumbnail_id_c3a0c549_fk_easy_thum FOREIGN KEY (thumbnail_id) REFERENCES public.easy_thumbnails_thumbnail(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_clipboard filer_clipboard_user_id_b52ff0bc_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboard
    ADD CONSTRAINT filer_clipboard_user_id_b52ff0bc_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_clipboarditem filer_clipboarditem_clipboard_id_7a76518b_fk_filer_clipboard_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboarditem
    ADD CONSTRAINT filer_clipboarditem_clipboard_id_7a76518b_fk_filer_clipboard_id FOREIGN KEY (clipboard_id) REFERENCES public.filer_clipboard(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_clipboarditem filer_clipboarditem_file_id_06196f80_fk_filer_file_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_clipboarditem
    ADD CONSTRAINT filer_clipboarditem_file_id_06196f80_fk_filer_file_id FOREIGN KEY (file_id) REFERENCES public.filer_file(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_file filer_file_folder_id_af803bbb_fk_filer_folder_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_file
    ADD CONSTRAINT filer_file_folder_id_af803bbb_fk_filer_folder_id FOREIGN KEY (folder_id) REFERENCES public.filer_folder(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_file filer_file_owner_id_b9e32671_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_file
    ADD CONSTRAINT filer_file_owner_id_b9e32671_fk_users_user_id FOREIGN KEY (owner_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_file filer_file_polymorphic_ctype_id_f44903c1_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_file
    ADD CONSTRAINT filer_file_polymorphic_ctype_id_f44903c1_fk_django_co FOREIGN KEY (polymorphic_ctype_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_folder filer_folder_owner_id_be530fb4_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folder
    ADD CONSTRAINT filer_folder_owner_id_be530fb4_fk_users_user_id FOREIGN KEY (owner_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_folder filer_folder_parent_id_308aecda_fk_filer_folder_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folder
    ADD CONSTRAINT filer_folder_parent_id_308aecda_fk_filer_folder_id FOREIGN KEY (parent_id) REFERENCES public.filer_folder(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_folderpermission filer_folderpermission_folder_id_5d02f1da_fk_filer_folder_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folderpermission
    ADD CONSTRAINT filer_folderpermission_folder_id_5d02f1da_fk_filer_folder_id FOREIGN KEY (folder_id) REFERENCES public.filer_folder(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_folderpermission filer_folderpermission_group_id_8901bafa_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folderpermission
    ADD CONSTRAINT filer_folderpermission_group_id_8901bafa_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_folderpermission filer_folderpermission_user_id_7673d4b6_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_folderpermission
    ADD CONSTRAINT filer_folderpermission_user_id_7673d4b6_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: filer_image filer_image_file_ptr_id_3e21d4f0_fk_filer_file_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.filer_image
    ADD CONSTRAINT filer_image_file_ptr_id_3e21d4f0_fk_filer_file_id FOREIGN KEY (file_ptr_id) REFERENCES public.filer_file(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_banner_translation main_banner_translation_master_id_f62e61c4_fk_main_banner_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_banner_translation
    ADD CONSTRAINT main_banner_translation_master_id_f62e61c4_fk_main_banner_id FOREIGN KEY (master_id) REFERENCES public.main_banner(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_customermenu_translation main_customermenu_tr_master_id_094e74e8_fk_main_cust; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customermenu_translation
    ADD CONSTRAINT main_customermenu_tr_master_id_094e74e8_fk_main_cust FOREIGN KEY (master_id) REFERENCES public.main_customermenu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_customersmenu main_customersmenu_menu_ptr_id_754679f5_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_customersmenu
    ADD CONSTRAINT main_customersmenu_menu_ptr_id_754679f5_fk_main_menu_id FOREIGN KEY (menu_ptr_id) REFERENCES public.main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_menu_translation main_menu_translation_master_id_6cb98964_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_menu_translation
    ADD CONSTRAINT main_menu_translation_master_id_6cb98964_fk_main_menu_id FOREIGN KEY (master_id) REFERENCES public.main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_static_translation main_static_translation_master_id_6c9d2d70_fk_main_static_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_static_translation
    ADD CONSTRAINT main_static_translation_master_id_6c9d2d70_fk_main_static_id FOREIGN KEY (master_id) REFERENCES public.main_static(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_staticfooterpage_translation main_staticfooterpag_master_id_c8687dff_fk_main_stat; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_staticfooterpage_translation
    ADD CONSTRAINT main_staticfooterpag_master_id_c8687dff_fk_main_stat FOREIGN KEY (master_id) REFERENCES public.main_staticfooterpage(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_usermenu_translation main_usermenu_transl_master_id_ec69a6aa_fk_main_user; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usermenu_translation
    ADD CONSTRAINT main_usermenu_transl_master_id_ec69a6aa_fk_main_user FOREIGN KEY (master_id) REFERENCES public.main_usermenu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_usersmenu main_usersmenu_menu_ptr_id_6293e1ef_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.main_usersmenu
    ADD CONSTRAINT main_usersmenu_menu_ptr_id_6293e1ef_fk_main_menu_id FOREIGN KEY (menu_ptr_id) REFERENCES public.main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_cart orders_cart_order_id_8e8f80ce_fk_orders_order_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart
    ADD CONSTRAINT orders_cart_order_id_8e8f80ce_fk_orders_order_id FOREIGN KEY (order_id) REFERENCES public.orders_order(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_cart orders_cart_variation_id_09aeaf8e_fk_products_variation_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_cart
    ADD CONSTRAINT orders_cart_variation_id_09aeaf8e_fk_products_variation_id FOREIGN KEY (variation_id) REFERENCES public.products_variation(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_order orders_order_customer_id_0b76f6a4_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_customer_id_0b76f6a4_fk_users_user_id FOREIGN KEY (customer_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: payment_paycomtransaction payment_paycomtransaction_order_id_8061c1ba_fk_orders_order_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.payment_paycomtransaction
    ADD CONSTRAINT payment_paycomtransaction_order_id_8061c1ba_fk_orders_order_id FOREIGN KEY (order_id) REFERENCES public.orders_order(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_brands products_brands_category_id_90ebd3a5_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_brands
    ADD CONSTRAINT products_brands_category_id_90ebd3a5_fk_products_category_id FOREIGN KEY (category_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category products_category_parent_id_3388f6c9_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_parent_id_3388f6c9_fk_products_category_id FOREIGN KEY (parent_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category_translation products_category_tr_master_id_f53287e3_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_category_translation
    ADD CONSTRAINT products_category_tr_master_id_f53287e3_fk_products_ FOREIGN KEY (master_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_color_translation products_color_trans_master_id_3e7ac7bb_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_color_translation
    ADD CONSTRAINT products_color_trans_master_id_3e7ac7bb_fk_products_ FOREIGN KEY (master_id) REFERENCES public.products_color(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_brand_id_3e2e8fd1_fk_products_brands_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_brand_id_3e2e8fd1_fk_products_brands_id FOREIGN KEY (brand_id) REFERENCES public.products_brands(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_category_id_9b594869_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_category_id_9b594869_fk_products_category_id FOREIGN KEY (category_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_owner_id_f189d068_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_owner_id_f189d068_fk_users_user_id FOREIGN KEY (owner_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_volume_id_9a242362_fk_products_volumetype_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_volume_id_9a242362_fk_products_volumetype_id FOREIGN KEY (volume_id) REFERENCES public.products_volumetype(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_productimage products_productimag_product_id_e747596a_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_productimage
    ADD CONSTRAINT products_productimag_product_id_e747596a_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_review products_review_product_id_d933ffa7_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_review
    ADD CONSTRAINT products_review_product_id_d933ffa7_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_variation products_variation_color_id_67e0ff3a_fk_products_color_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation
    ADD CONSTRAINT products_variation_color_id_67e0ff3a_fk_products_color_id FOREIGN KEY (color_id) REFERENCES public.products_color(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_variation products_variation_product_id_58e457dc_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_variation
    ADD CONSTRAINT products_variation_product_id_58e457dc_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_volumetype_translation products_volumetype__master_id_f5e4ae1f_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.products_volumetype_translation
    ADD CONSTRAINT products_volumetype__master_id_f5e4ae1f_fk_products_ FOREIGN KEY (master_id) REFERENCES public.products_volumetype(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_client users_client_delivery_address_id_3ec7728a_fk_users_del; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_delivery_address_id_3ec7728a_fk_users_del FOREIGN KEY (delivery_address_id) REFERENCES public.users_deliveryaddress(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_client users_client_user_id_06d1c832_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_client
    ADD CONSTRAINT users_client_user_id_06d1c832_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_deliveryaddress users_deliveryaddress_user_id_33d75da7_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_deliveryaddress
    ADD CONSTRAINT users_deliveryaddress_user_id_33d75da7_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_merchant users_merchant_user_id_30e64459_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_merchant
    ADD CONSTRAINT users_merchant_user_id_30e64459_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_paymentcards users_paymentcards_holder_id_65bb9c5f_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_paymentcards
    ADD CONSTRAINT users_paymentcards_holder_id_65bb9c5f_fk_users_user_id FOREIGN KEY (holder_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user users_user_avatar_id_2054405b_fk_users_files_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user
    ADD CONSTRAINT users_user_avatar_id_2054405b_fk_users_files_id FOREIGN KEY (avatar_id) REFERENCES public.users_files(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_groups users_user_groups_group_id_9afc8d0e_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_group_id_9afc8d0e_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_groups users_user_groups_user_id_5f6f5a90_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_groups
    ADD CONSTRAINT users_user_groups_user_id_5f6f5a90_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_user_permissions users_user_user_perm_permission_id_0b93982e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_perm_permission_id_0b93982e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_user_permissions users_user_user_permissions_user_id_20aca447_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY public.users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_user_id_20aca447_fk_users_user_id FOREIGN KEY (user_id) REFERENCES public.users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

